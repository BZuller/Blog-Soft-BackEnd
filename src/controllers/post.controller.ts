import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';
import CreatePostService from '../services/Posts/createPostService/createPost.service';
import DeletePostService from '../services/Posts/deletePostService/deletePost.service';
import GetPostsService from '../services/Posts/getPostsService/getPosts.service';

export default class PostController {
  constructor(private getPostsService: GetPostsService) {}

  public async createPostHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const { title, content, categorieId, authorId } = body;

      const createPost = new CreatePostService();

      const post = await createPost.execute({
        title,
        content,
        categorieId,
        authorId,
      });

      return res.status(StatusCodes.CREATED).json(post);
    } catch (error: any) {
      logger.error(`PostController: ${error.message}`);
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
      logger.error(`PostController: ${error.message}`);
      return next(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async getPostsHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const postsList = await this.getPostsService.execute();

      return res.json(postsList);
    } catch (error: any) {
      logger.error(`PostController: ${error.message}`);
      return next(error);
    }
  }
}
