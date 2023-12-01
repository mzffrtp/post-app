class AppError extends Error {
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
        this.status = String(this.statuscode).startsWith("4") ? "failed" : "error";

        Error.captureStackTrace(this, this.constructor)
    }
};

module.exports = AppError