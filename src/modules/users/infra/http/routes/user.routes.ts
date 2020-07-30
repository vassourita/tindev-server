import { Router } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';

const routes = Router();

routes.get('/', async (request, response) => {
  const listAllUsers = container.resolve(ListAllUsersService);

  const users = await listAllUsers.execute();

  response.json(users);
});

routes.post('/', async (request, response) => {
  const { username } = request.body;

  const createUser = container.resolve(CreateUserService);

  const user = await createUser.execute(username);

  response.json(user);
});

export default routes;
