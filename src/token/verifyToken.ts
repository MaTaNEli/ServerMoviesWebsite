import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { stringify } from 'querystring';


// Middleware to check if the user is connected
export async function connect(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies;
    if (Object.keys(token).length === 0) return res.status(401).json({error: 'Access Denide'});

    Object.entries(token).forEach(([key, value]) => {
      if (key === 'auth_token')
      {
        try{
          const user = jwt.verify(value as string, process.env.TOKEN_SECRET as string)
          if(user){
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