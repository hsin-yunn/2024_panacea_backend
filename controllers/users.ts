import handleErrorAsync from '../service/handleErrorAsync';
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/users';
import appErrorService from '../service/appErrorService';
import { registerMailSend } from '../service/mail';
import { generateJwtSend } from '../service/auth';
const USER =
  '-password -subject -specialty -language -workExperience -education -certifiedDocuments -bankName -bankCode -bankAccount -actualAmount -earnings -approvalStatus';
const COACH = '-password';
// 註冊學員

export default {

 register : handleErrorAsync(async (req, res, next) => {
  let { name, email, password, confirmPassword } = req.body;

  //確認 email 是否已被註冊過
  //如果已被註冊，但沒有認證帳號，重新寄一次認證信
  let user = await UserModel.findOne({ email });
  if (user && user.emailVerifiedAt) {
    return appErrorService(400, 'email is exist', next);
  }

  if (!user) {
    password = await bcrypt.hash(req.body.password, 12);
    //建立使用者
    user = await UserModel.create({
      name,
      email,
      password,
    });
  }
  await registerMailSend(email, user.id, res);
}),

//登入
 signIn : handleErrorAsync(async (req, res, next) => {
  let { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  const isMatch = await bcrypt.compare(password, user!.password as string);
  if (user && isMatch) {
    //產生 token
    if (!user.emailVerifiedAt) {
      await registerMailSend(email, user.id, res);
    } else {
      generateJwtSend(user.id, res);
    }
  } else {
    appErrorService(400, 'email or password is not correct', next);
  }
}),

}
