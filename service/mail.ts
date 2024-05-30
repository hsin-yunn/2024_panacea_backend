import handleSuccess from './handleSuccess';
import { Response } from 'express';
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


export const registerMailSend = async (email: string, userId: string, res: Response) => {
  const verifyUrl = `/api/auth/email-link/${userId}`;
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_AUTH_CLIENTID, 
    process.env.GOOGLE_AUTH_CLIENT_SECRET, 
    "https://developers.google.com/oauthplayground" 
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_AUTH_REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken()
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      type: "OAuth2",
      user: "gonsakon@gmail.com", 
      clientId: process.env.GOOGLE_AUTH_CLIENTID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_AUTH_REFRESH_TOKEN,
      accessToken: accessToken
  }
});

const mailOptions = {
  from: '廖洧杰 <gonsakon@gmail.com>',
};
await transporter.sendMail(mailOptions);
res.status(200).json({
  status: 'success',
  message: "信件發送成功"
});
};

