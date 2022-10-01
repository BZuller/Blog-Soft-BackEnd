import { Router } from 'express';
import UserController from '../../controllers/user.controller';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const routes = Router();

const userController = new UserController();

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

routes.route('/user').post(
  // [requireUser, validateResource(createProductSchema)],
  userController.createUserHandler
);

export default routes;
