import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';
import CreateUserService from '../services/User/createUserService/createUser.service';

export default class UserController {
  public async createUserHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const createUser = new CreateUserService();

      const user = await createUser.execute(body);

      return res.status(StatusCodes.CREATED).json(user);
    } catch (error: any) {
      logger.error(`UserController: ${error.message}`);
      return next(error);
    }
  }
}
