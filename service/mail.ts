import { Response } from 'express';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;
// const exphbs = require('express-handlebars');
// const nodemailerHandlebars = require('nodemailer-express-handlebars');

const mailSender = process.env.MAIL_SENDER;

export const registerMailSend = async (email: string, userId: string, res: Response) => {
  const verifyUrl = `/api/auth/email-link/${userId}`;

};

