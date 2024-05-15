"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleErrorAsync = (fun) => {
    return function (req, res, next) {
        return fun(req, res, next).catch((err) => next(err));
    };
};
exports.default = handleErrorAsync;
