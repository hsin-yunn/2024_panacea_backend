import express from 'express';
import {
  updatePassword,
} from '../controllers/users';
const router = express.Router();

//user signin,signup
router.post('/api/auth/update-password', updatePassword); // 更新密碼

export default router;
