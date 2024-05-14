import handleErrorAsync from "../service/handleErrorAsync";
import bcrypt from 'bcryptjs';

export const register = handleErrorAsync(async (req, res, next) => {
  //test
  let { email, password, name } = req.body
  password = await bcrypt.hash(req.body.password, 12)
  console.log(password);
});

export const signIn = handleErrorAsync(async (req, res, next) => {
  //test
  let { email, password, name } = req.body
  password = await bcrypt.hash(req.body.password, 12)
  console.log(password);
});