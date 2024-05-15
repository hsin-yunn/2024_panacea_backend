"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const OAuth2 = googleapis_1.google.auth.OAuth2;
const sendMail = async (to, subject, text) => {
    const GOOGLE_AUTH_CLIENTID = process.env.GOOGLE_AUTH_CLIENTID;
    const GOOGLE_AUTH_CLIENT_SECRET = process.env.GOOGLE_AUTH_CLIENT_SECRET;
    const GOOGLE_AUTH_REFRESH_TOKEN = process.env.GOOGLE_AUTH_REFRESH_TOKEN;
    const oauth2Client = new OAuth2(GOOGLE_AUTH_CLIENTID, GOOGLE_AUTH_CLIENT_SECRET, "https://developers.google.com/oauthplayground");
    oauth2Client.setCredentials({
        refresh_token: GOOGLE_AUTH_REFRESH_TOKEN
    });
    const accessToken = oauth2Client.getAccessToken();
    const mailSender = process.env.MAIL_SENDER;
    let transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: mailSender,
            clientId: GOOGLE_AUTH_CLIENTID,
            clientSecret: GOOGLE_AUTH_CLIENT_SECRET,
            refreshToken: GOOGLE_AUTH_REFRESH_TOKEN,
            accessToken: accessToken
        }
    });
    const mailOptions = {
        from: mailSender,
        to,
        subject,
        text
    };
    await transporter.sendMail(mailOptions);
};
exports.sendMail = sendMail;
