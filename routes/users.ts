import express from 'express';
import userController from '../controllers/users';
const router = express.Router();

//user signin,signup
router.post('/api/auth/update-password', userController.updatePassword); // 更新密碼

export default router;
