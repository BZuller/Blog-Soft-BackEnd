import { Router } from 'express';
import PostController from '../../controllers/post.controller';

const routes = Router();
const postController = new PostController();

routes.route('/').post(postController.createPostHandler);
routes.route('/').delete(postController.deletePostHandler);

export default routes;
