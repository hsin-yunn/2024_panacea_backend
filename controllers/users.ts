import handleErrorAsync from '../service/handleErrorAsync';
import bcrypt from 'bcryptjs';
import appErrorService from '../service/appErrorService';
import handleSuccess from '../service/handleSuccess';
import UserModel from '../models/users';

const userController = {
  updatePassword : handleErrorAsync(async (req, res, next) => {
    const { password, newPassword, newPasswordConfirm } = req.body;
    const _id = '123123';
    try {
      const currentUser = await UserModel.findById(_id);
      const isMatch = await bcrypt.compare(password, currentUser!.password as string);
      if (isMatch) {
        const updatedAt = new Date();
        const updatePassword = await bcrypt.hash(newPassword, 12);
        await UserModel.findByIdAndUpdate(
          {
            _id,
          },
          {
            password: updatePassword,
            updatedAt,
          }
        );
        handleSuccess(res, 200, 'password update.');
      } else {
        return appErrorService(400, '發生錯誤', next);
      }
    } catch (error) {
      return appErrorService(400, (error as Error).message, next);
    }
  }),
}

export default userController;
