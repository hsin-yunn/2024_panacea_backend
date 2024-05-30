import { Response } from 'express';
import { google } from 'googleapis';
// const exphbs = require('express-handlebars');

// const nodemailerHandlebars = require('nodemailer-express-handlebars');

export const registerMailSend = async (email: string, userId: string, res: Response) => {
  // const OAuth2 = google.auth.OAuth2;
  const mailSender = process.env.MAIL_SENDER;
  const verifyUrl = `/api/auth/email-link/${userId}`;

};

