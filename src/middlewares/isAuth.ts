import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/auth';
import ApiError from '../utils/apiError.utils';

export default function isAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new ApiError(401, true, 'JWT token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const decodeToken = verify(token, auth.jwt.secret);

    return next();
  } catch {
    throw new ApiError(401, true, 'Invalid JWT token');
  }
}
