import { Router } from 'express';
import PostController from '../../controllers/post.controller';
import isAuth from '../../middlewares/isAuth';
import { PostRepository } from '../../repositories/implementations/PostRepository';
import GetPostsService from '../../services/Posts/getPostsService/getPosts.service';

const routes = Router();
const postRepository = new PostRepository();
const getPostsService = new GetPostsService(postRepository);
const postController = new PostController(getPostsService);

routes
  .route('/')
  .post(isAuth, (req, res, next) =>
    postController.createPostHandler(req, res, next)
  );

routes
  .route('/')
  .delete(isAuth, (req, res, next) =>
    postController.deletePostHandler(req, res, next)
  );

routes
  .route('/')
  .get((req, res, next) => postController.getPostsHandler(req, res, next));

export default routes;
