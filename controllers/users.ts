import handleErrorAsync from '../service/handleErrorAsync';
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/users';
import appErrorService from '../service/appErrorService';
import { generateJwtSend } from '../service/auth';
const USER =
  '-password -subject -specialty -language -workExperience -education -certifiedDocuments -bankName -bankCode -bankAccount -actualAmount -earnings -approvalStatus';
const COACH = '-password';
// 註冊學員

export default {

//登入
 signIn : handleErrorAsync(async (req, res, next) => {
  let { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  const isMatch = await bcrypt.compare(password, user!.password as string);
  if (user && isMatch) {
    //產生 token
    if (!user.emailVerifiedAt) {
    } else {
      generateJwtSend(user.id, res);
    }
  } else {
    appErrorService(400, 'email or password is not correct', next);
  }
}),

}
