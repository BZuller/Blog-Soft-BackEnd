import { NextFunction, Request, Response } from 'express';
import logger from '../config/logger';
import CreateSessionService from '../services/Session/createSession.service';

export default class SessionController {
  constructor(private createSessionService: CreateSessionService) {}

  public async createSessionHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { body } = req;
      const { email, password } = body;

      const user = await this.createSessionService.execute({
        email,
        password,
      });

      return res.json(user);
    } catch (error: any) {
      logger.error(`SessionController: ${error.message}`);
      return next(error);
    }
  }
}
