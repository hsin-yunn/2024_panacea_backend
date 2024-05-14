import express from "express";
const router = express.Router();
import { register } from "../controllers/users";

/* GET users listing. */
router.post('/api/auth/register',register);

export default router;
