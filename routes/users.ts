import express from 'express';
import {
  applyCoach,
  userInfo,
  userUpdate,
  updatePassword,
} from '../controllers/users';
import { isAuth } from '../service/auth';
const router = express.Router();

//user signin,signup
router.post('/api/auth/update-password', isAuth, updatePassword); // 更新密碼
router.get('/api/auth/user-info', isAuth, userInfo); // 取得使用者資訊
router.patch('/api/auth/update-user', isAuth, userUpdate); // 更新使用者資訊
router.post('/api/auth/apply-coach', isAuth, applyCoach); // 註冊教練

export default router;
