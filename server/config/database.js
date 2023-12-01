const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB = process.env.DATABASE.replace("<PASS>", process.env.DATABASE_PASS)

const database = () => {
    mongoose
        .connect(DB)
        .then(() => console.log("mongoDB connected"))
        .catch((err) => console.log("server not connected", err))
}

module.exports = database