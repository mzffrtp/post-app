const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//! Create JWT Token
const signToken = (id) => {
    return (token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    }))
};

//! Sent token to user
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id)

    //! token should be send by cookies

    res.cookie("jwt", token, {
        expires: moment(Date.now()).add(90, "days").toDate(),
        httpOnly: true,
        secure: false //! true after deployment
    })

    res.status(statusCode).json({
        status: "success",
        data: { user }
    })
}
exports.register = catchAsync(async (req, res, next) => {
    const { username, email, password, passwordConfirm } = req.body;

    const userCheck = await User.findOne({ email })
    console.log(userCheck);

    if (userCheck) return next(new AppError("This user already exsits, please login!", 400));

    const newUser = await User.create(req.body)
    console.log("newUser-->", newUser);
    await createSendToken(newUser, 200, res)
})

exports.login = catchAsync(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        next(new AppError("Email and password should not be blank!"))
    }

    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new AppError("Email or password wrong, please try again", 400))
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (!isCorrectPassword) {
        return next(new AppError("Email or password wrong, please try again", 400))
    }

    createSendToken(user, 200, res)
})