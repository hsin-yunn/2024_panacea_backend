"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../types/AppError"));
const appError = (httpStatus, errMessage, next) => {
    const error = new AppError_1.default(errMessage, httpStatus);
    next(error);
};
exports.default = appError;
