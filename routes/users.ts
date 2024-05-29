import express from 'express';
import {
  register,
  signIn,
  verifyEmail,
  sendVerifyEmail,
  sendForgetPassword,
  resetPassword,
  applyCoach,
  userInfo,
  userUpdate,
  updatePassword,
} from '../controllers/users';
import { signedMiddleware } from '../service/signature';
import { isAuth } from '../service/auth';
const router = express.Router();

//user signin,signup
router.post('/api/auth/register', register); // 註冊學員
router.post('/api/auth/sign-in', signIn); // 登入
router.post('/api/auth/verify-email', sendVerifyEmail); // 寄送Email驗證信
router.get('/api/auth/email-link/:userId', signedMiddleware, verifyEmail); // 驗證Email
router.post('/api/auth/forget-password', sendForgetPassword); // 忘記密碼
router.post('/api/auth/reset-password/:userId', signedMiddleware, resetPassword); // 重設密碼
router.post('/api/auth/update-password', isAuth, updatePassword); // 更新密碼
router.get('/api/auth/user-info', isAuth, userInfo); // 取得使用者資訊
router.patch('/api/auth/update-user', isAuth, userUpdate); // 更新使用者資訊
router.post('/api/auth/apply-coach', isAuth, applyCoach); // 註冊教練

export default router;
