const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")


const PostSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },

    date: {
        type: Date,
        default: new Date
    }
})


const Post = mongoose.model('Post', PostSchema);
module.exports = Post