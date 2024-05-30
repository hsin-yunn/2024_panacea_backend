import express from 'express';
import userController from '../controllers/users';
const router = express.Router();

//user signin,signup
router.post('/api/auth/sign-in', userController.signIn); // 登入

export default router;
