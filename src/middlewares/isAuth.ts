import { NextFunction, Request, Response } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import config from '../config/config';
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
    const decodeToken = verify(token, config.jwtSecret as Secret);

    return next();
  } catch {
    throw new ApiError(401, true, 'Invalid JWT token');
  }
}
