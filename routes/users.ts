import express from "express";
import { Request,Response } from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', function (req:Request, res:Response) {
  res.send('respond with a resource heyhey');
});

export default router;
