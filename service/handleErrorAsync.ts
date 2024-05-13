import { Request,Response,NextFunction } from "express";

const handleErrorAsync = (fun:Function) => {
  return function (req:Request, res:Response, next:NextFunction) {
    return fun(req, res, next).catch((err:Error) => next(err));
  };
};

export default handleErrorAsync;
