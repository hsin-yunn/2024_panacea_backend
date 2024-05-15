"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
        select: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        select: false,
    },
    name: {
        type: String,
        requried: [true, '姓名必填'],
    },
    email: {
        type: String,
        requried: [true, '信箱必填'],
    },
    password: {
        type: String,
        requried: [true, '密碼必填'],
    },
    avatar: {
        type: String,
    },
    emailVerifiedAt: {
        type: Date,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isCoach: {
        type: Boolean,
        default: false,
    },
});
const User = mongoose_1.default.model('User', schema);
exports.default = User;
