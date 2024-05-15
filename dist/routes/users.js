"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_1 = require("../controllers/users");
//user signin,signup
router.post('/api/auth/register', users_1.register);
router.post('/api/auth/sign-in', users_1.signIn);
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = router;
