import express from 'express';
import userController from '../controllers/users';
import { signedMiddleware } from '../service/signature';
import throttle from '../service/throttle';
import { isAuth } from '../service/auth';
const router = express.Router();

//user signin,signup
router.post('/api/auth/register', userController.register); // 註冊學員
router.post('/api/auth/sign-in', throttle, userController.signIn); // 登入
router.post('/api/auth/verify-email', throttle, userController.sendVerifyEmail); // 寄送Email驗證信
router.get(
  '/api/auth/email-link/:userId',
  signedMiddleware,
  userController.verifyEmail,
); // 驗證Email
router.post(
  '/api/auth/forget-password',
  throttle,
  userController.sendForgetPassword,
); // 忘記密碼
router.post(
  '/api/auth/reset-password/:userId',
  signedMiddleware,
  userController.resetPassword,
); // 重設密碼
router.post('/api/auth/update-password', isAuth, userController.updatePassword); // 更新密碼
router.get('/api/auth/user-info', isAuth, userController.userInfo); // 取得使用者資訊
router.patch('/api/auth/update-user', isAuth, userController.userUpdate); // 更新使用者資訊
router.post('/api/auth/apply-coach', isAuth, userController.applyCoach); // 註冊教練

export default router;
