import express from 'express';
import userController from '../controllers/users';
const router = express.Router();

//user signin,signup
router.post('/api/auth/register', userController.register); // 註冊學員
router.post('/api/auth/sign-in', userController.signIn); // 登入
router.post('/api/auth/verify-email', userController.sendVerifyEmail); // 寄送Email驗證信
router.post('/api/auth/forget-password', userController.sendForgetPassword); // 忘記密碼

export default router;
