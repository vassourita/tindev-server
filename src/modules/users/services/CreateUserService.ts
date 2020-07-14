import { injectable, inject } from 'tsyringe';

import ApplicationError from '@shared/errors/ApplicationError';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute(data: ICreateUserDTO) {
    const userExists = await this.userRepository.findByUsername(data.username);

    if (userExists) {
      throw new ApplicationError('Username already in use');
    }

    const user = await this.userRepository.create(data);

    return user;
  }
}

export default CreateUserService;
