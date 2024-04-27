import { UserRepository } from '../user/infraestructure/UserRepository.js';
import { CreateUser } from '../user/application/create.js';
import { GetUsers } from '../user/application/get-all.js';

import { GetUsersController } from '../user/infraestructure/controllers/get-users.controller.js';
import { CreateUserController } from '../user/infraestructure/controllers/createController.js';
import { Hash } from '../services/hash.js';
import { LoginController } from '../user/infraestructure/controllers/login.js';
import { LoginUser } from '../user/application/login.js';
import { JWT } from '../services/jwt.js';

const userRepository = new UserRepository();
const hashService = new Hash();
const jwtService = new JWT();

const getUsers = new GetUsers(userRepository);
export const getUsersController = new GetUsersController(getUsers);

const createUser = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hashService, jwtService);
export const loginController = new LoginController(loginUser);
