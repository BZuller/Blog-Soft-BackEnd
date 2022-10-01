import { Router } from 'express';
import UserController from '../../controllers/user.controller';

const routes = Router();
const userController = new UserController();

routes.route('/').post(userController.createUserHandler);

export default routes;
