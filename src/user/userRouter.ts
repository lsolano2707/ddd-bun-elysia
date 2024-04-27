import { Elysia, t } from 'elysia';
import { createUserController, loginController, getUsersController } from '../server/depenncies.js';
import { createUserDTO, loginUserDTO } from './domain/userDTO.js';

export const userRouter = new Elysia({ prefix: '/users' })
  .get('/', getUsersController.run.bind(getUsersController))
  .post('/', createUserController.run.bind(createUserController), createUserDTO)
  .post('/login', loginController.run.bind(loginController), loginUserDTO);
