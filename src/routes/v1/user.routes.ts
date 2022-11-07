import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import { UserRepository } from '../../repositories/implementations/UserRepository';
import CreateUserService from '../../services/User/createUserService/createUser.service';
// /**
//  * @openapi
//  * '/api/products/{productId}':
//  *  get:
//  *     tags:
//  *     - Products
//  *     summary: Get a single product by the productId
//  *     security:
//  *      - bearerAuth: []
//  *     parameters:
//  *      - name: productId
//  *        in: path
//  *        description: The id of the product
//  *        required: true
//  *     responses:
//  *       200:
//  *         description: Success
//  *         content:
//  *          application/json:
//  *           schema:
//  *              $ref: '#/components/schemas/Product'
//  *       404:
//  *         description: Product not found
//  */

const routes = Router();
const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);
const userController = new UserController(createUserService);

routes
  .route('/')
  .post((req, res, next) => userController.createUserHandler(req, res, next));

export default routes;
