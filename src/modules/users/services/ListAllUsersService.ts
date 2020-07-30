import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class ListAllUsersService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute(exceptUserId?: string): Promise<User[]> {
    let users: User[];

    if (exceptUserId) {
      users = await this.userRepository.allExcept(exceptUserId);
    } else {
      users = await this.userRepository.all();
    }

    return users;
  }
}

export default ListAllUsersService;
