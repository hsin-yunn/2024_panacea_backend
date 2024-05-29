import express from 'express';
import {
  applyCoach,
  userInfo,
  userUpdate,
  updatePassword,
} from '../controllers/users';
const router = express.Router();

//user signin,signup
router.post('/api/auth/update-password', updatePassword); // 更新密碼
router.get('/api/auth/user-info', userInfo); // 取得使用者資訊
router.patch('/api/auth/update-user', userUpdate); // 更新使用者資訊
router.post('/api/auth/apply-coach', applyCoach); // 註冊教練

export default router;
