const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const authRouter = require("./routes/authRouths");
const postRouter = require("./routes/postRoute");

const app = express();
app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.json({ urlencoded: "30mb", extended: true }))

//routes
app.use("/", authRouter)
app.use("/", postRouter)
//!undefined port error
app.all("*", (req, res, next) => {
    next(new AppError("Undefined path, check your URL", 400))
})

module.exports = app
