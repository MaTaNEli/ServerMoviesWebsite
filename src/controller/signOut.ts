import { Request, Response } from 'express';

export const signOut = async (req: Request, res: Response) => {
  res.cookie('MSW', { expires: 'Thu, 01 Jan 1970 00:00:00 GMT', httpOnly: true })
  res.status(200).send();
};