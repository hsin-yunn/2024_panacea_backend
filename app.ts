import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';
import AppError from "./types/AppError";
import appErrorService from './service/appErrorService';
import {resErrorProd, resErrorDev} from './service/resError';

//env
import dotenv from 'dotenv'; 
dotenv.config({ path: './.env' });

//mongoose
const DB = process.env.DATABASE!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!,
);
mongoose
  .connect(DB)
  .then(() => {
    console.log('資料庫連線成功');
  })
  .catch((err:Error) => {
    console.log(err, '資料庫連線異常');
  });

//router
import usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

//404
app.use(function (req: Request, res: Response, next: NextFunction) {
  appErrorService(404, '找不到路徑', next);
});
//error
app.use(function (err: AppError, req: Request, res: Response) {
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === 'dev') {
    return resErrorDev(err, res);
  }
  resErrorProd(err, res);
});

export default app;
