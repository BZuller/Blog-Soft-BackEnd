import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';
import CreatePostService from '../services/Posts/createPostService/createPost.service';
import DeletePostService from '../services/Posts/deletePostService/deletePost.service';

export default class PostController {
  public async createPostHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const createPost = new CreatePostService();

      const post = await createPost.execute(body);

      return res.status(StatusCodes.CREATED).json(post);
    } catch (error: any) {
      logger.error(`UserController: ${error.message}`);
      return next(error);
    }
  }

  public async deletePostHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const deletePost = new DeletePostService();

      const post = await deletePost.execute(body);

      return res.status(StatusCodes.NO_CONTENT).json(post);
    } catch (error: any) {
      logger.error(`UserController: ${error.message}`);
      return next(error);
    }
  }
}
