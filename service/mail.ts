import handleSuccess from './handleSuccess';
import { Response } from 'express';


export const registerMailSend = async (email: string, userId: string, res: Response) => {
  const verifyUrl = `/api/auth/email-link/${userId}`;
};

