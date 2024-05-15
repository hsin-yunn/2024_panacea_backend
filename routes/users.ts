import express from "express";
const router = express.Router();
import { register,signIn } from "../controllers/users";

//user signin,signup
router.post('/api/auth/register',register);
router.post('/api/auth/sign-in',signIn);

export default router;
