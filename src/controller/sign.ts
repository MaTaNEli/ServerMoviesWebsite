//import bcrypt from 'bcryptjs';
import jwt, {Secret} from 'jsonwebtoken';

export function createToken(id: string, username: string){
  const tokenUser = {
      id: id,
      username: username
  };

  const secret: Secret = process.env.TOKEN_SECRET as Secret
  return (jwt.sign(tokenUser, secret));
};