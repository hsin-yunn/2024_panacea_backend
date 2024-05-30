import express from 'express';
import userController from '../controllers/users';
import { isAuth } from '../service/auth';
const router = express.Router();

//user signin,signup
router.post('/api/auth/register', userController.register); // 註冊學員
router.post('/api/auth/sign-in', userController.signIn); // 登入
router.post('/api/auth/verify-email', userController.sendVerifyEmail); // 寄送Email驗證信
router.post('/api/auth/forget-password', userController.sendForgetPassword); // 忘記密碼
router.post('/api/auth/update-password', isAuth, userController.updatePassword); // 更新密碼
router.get('/api/auth/user-info', isAuth, userController.userInfo); // 取得使用者資訊
router.patch('/api/auth/update-user', isAuth, userController.userUpdate); // 更新使用者資訊
router.post('/api/auth/apply-coach', isAuth, userController.applyCoach); // 註冊教練

export default router;
