import { container } from 'tsyringe';

import TypeormUserRepository from '@modules/users/infra/typeorm/repositories/TypeormUserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';

container.registerSingleton<IUserRepository>('TypeormUserRepository', TypeormUserRepository);

container.registerSingleton<ListAllUsersService>('ListAllUsersService', ListAllUsersService);
container.registerSingleton<CreateUserService>('CreateUserService', CreateUserService);
