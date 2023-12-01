const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const authRouter = require("./routes/authRouths");

const app = express();
app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.json({ urlencoded: "30mb", extended: true }))

//routes
app.use("/api/v1/auth", authRouter)
//!undefined port error
app.all("*", (req, res, next) => {
    next(new AppError("Undefined path, check your URL", 400))
})

//! GLOBAL ERROR MANAGEMENT
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err); // Pass the error to the default Express error handler
    }

    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });

    console.error(err.stack); // Log the error for debugging
});


module.exports = app
