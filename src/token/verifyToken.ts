import jwt from 'jsonwebtoken';
import {User} from '../interface/movieInterface'
import { Request, Response, NextFunction } from 'express';

// Middleware to check if the user is connected
export async function connect(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies;
    if (Object.keys(token).length === 0) return res.status(401).json({error: 'Access Denide'});
    Object.entries(token).forEach(([key, value]) => {
      if (key === 'MSW')
      {
        try{
          if(jwt.verify(value as string, process.env.TOKEN_SECRET as string)){
            const m = jwt.verify(value as string, process.env.TOKEN_SECRET as string) as User
            res.locals.id = m.id as number;
            next();
          }
          else
              res.status(401).json({error: 'Access Denide'});
        } catch (err) {
            res.status(401).json({error: 'Access Denide'});
        }
      }
    });  
}