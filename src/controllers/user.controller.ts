import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';
import CreateUserService from '../services/User/createUserService/createUser.service';
import ICreateUserDTO from '../services/User/createUserService/ICreateUserRequestDTO';

export default class UserController {
  constructor(private createUserService: CreateUserService) {}

  public async createUserHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const { name, email, username, password, role } = body;

      const data: ICreateUserDTO = { name, email, username, password, role };

      const user = await this.createUserService.execute(data);

      return res.status(StatusCodes.CREATED).json(user);
    } catch (error: any) {
      logger.error(`UserController: ${error.message}`);
      return next(error);
    }
  }
}
