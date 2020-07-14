import { container } from 'tsyringe';

import UserRepository from '@modules/users/infra/typeorm/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<ListAllUsersService>('ListAllUsersService', ListAllUsersService);
container.registerSingleton<CreateUserService>('CreateUserService', CreateUserService);
