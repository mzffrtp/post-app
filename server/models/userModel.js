const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please write your name!"],
        trim: true,
        validate: [validator.isAlpha, "name should include just letters!"]
    },
    email: {
        type: String,
        required: [true, "E-mail shouldn´t be blank"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please enter a valid email!"]
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "PLease confirm your password!"],
        validate: {
            validator: function (value) {
                return value === this.password
            },
            message: "Please confirm your password!"
        }
    },
    date: {
        type: Date,
        default: new Date
    }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
})



const User = mongoose.model('User', userSchema);
module.exports = User