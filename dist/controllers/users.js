"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.register = void 0;
const handleErrorAsync_1 = __importDefault(require("../service/handleErrorAsync"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.register = (0, handleErrorAsync_1.default)(async (req, res, next) => {
    //test
    let { email, password, name } = req.body;
    password = await bcryptjs_1.default.hash(req.body.password, 12);
    console.log(password);
    //確認 email、password、name
    //確認 email 是否已被註冊過
    //加密密碼
    //建立使用者
    //發送帳號驗證信
});
exports.signIn = (0, handleErrorAsync_1.default)(async (req, res, next) => {
    //test
    let { email, password, name } = req.body;
    password = await bcryptjs_1.default.hash(req.body.password, 12);
    console.log(password);
    //確認 email,password
    //產生 token
});
