import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface JwtPayload {
  username: string
}

// Middleware to check if the user is connected
export async function checkValidated(req: Request, res: Response, next: NextFunction) {

    const token = req.cookies;
    if (Object.keys(token).length === 0) return res.status(401).json({error: 'Access Denide'});

    Object.entries(token).forEach(([key, value]) => {
      if (key === 'MSW')
      {
        try{
          const user = jwt.verify(value as string, process.env.TOKEN_SECRET as string) as JwtPayload
          if(user){
            res.status(200).json(user.username);
          }
          else
              res.status(401).json({error: 'Access Denide'});
        } catch (err) {
            res.status(401).json({error: 'Access Denide'});
        }
      }
    });  
 
}