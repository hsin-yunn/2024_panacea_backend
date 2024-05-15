"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resErrorDev = exports.resErrorProd = void 0;
const resErrorProd = function (err, res) {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            message: err.message,
        });
    }
    else {
        console.error('error', err);
        res.status(500).json({
            code: 500,
            message: 'Server Error',
        });
    }
};
exports.resErrorProd = resErrorProd;
const resErrorDev = function (err, res) {
    res.status(err.statusCode).json({
        message: err.message,
        error: err,
        code: err.statusCode,
    });
};
exports.resErrorDev = resErrorDev;
