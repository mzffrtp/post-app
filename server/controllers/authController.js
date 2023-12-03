const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.register = async (req, res, next) => {
    try {
        const { username, email, password, passwordConfirm } = req.body;

        const userCheck = await User.findOne({ email })

        if (userCheck) return next(new AppError("This user already exsits, please login!", 400));

        const newUser = await User.create(req.body)

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        })

        res.status(201).json({
            status: "success",
            message: "User registered successfully!",
            newUser,
            token
        })
    } catch (error) {
        res.status(201).json({
            status: "failed",
            message: error.message
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne(email)

        if (!user) {
            return next(new AppError("There is no such a user!", 400))
        }

        const passwrodComparw = await bcrypt.compare(password, user.password)

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        })

        res.status(201).json({
            status: "success",
            message: "User registered successfully!",
            newUser,
            token
        })
    } catch (error) {
        res.status(201).json({
            status: "failed",
            message: error.message
        })
    }
}