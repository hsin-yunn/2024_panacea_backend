import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    requried: [true, '姓名必填'],
  },
  email: {
    type: String,
    requried: [true, '信箱必填'],
  },
  password: {
    type: String,
    requried: [true, '密碼必填'],
  },
});

const User = mongoose.model('User', schema);

export default User;
