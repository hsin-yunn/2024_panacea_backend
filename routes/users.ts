import express from 'express';
import {
  userInfo,
  updatePassword,
} from '../controllers/users';
const router = express.Router();

//user signin,signup
router.post('/api/auth/update-password', updatePassword); // 更新密碼
router.get('/api/auth/user-info', userInfo); // 取得使用者資訊

export default router;
