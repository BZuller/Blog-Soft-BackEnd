import { object, string, InferType } from 'yup';

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *        - name
 *        - email
 *        - username
 *        - password
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 */

const payload = {
  body: object({
    name: string().defined('Name is required'),
    email: string().defined('Email is required'),
    username: string().defined('username is required'),
    password: string().defined('password is required'),
  }).defined(),
};

const params = {
  params: object({ userId: string().defined('userId is required') }),
};

export const createUserSchema = object({
  ...payload,
});

export const updateUserSchema = object({
  ...payload,
  ...params,
});

export const deleteUserSchema = object({
  ...params,
});

export const getUserSchema = object({
  ...params,
});

export type CreateUserInput = InferType<typeof createUserSchema>;
export type UpdateUserInput = InferType<typeof updateUserSchema>;
export type ReadUserInput = InferType<typeof getUserSchema>;
export type DeleteUserInput = InferType<typeof deleteUserSchema>;
