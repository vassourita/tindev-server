import Axios from 'axios';
import { injectable, inject } from 'tsyringe';

import ApplicationError from '@shared/errors/ApplicationError';

import IUserRepository from '../repositories/IUserRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute(username: string) {
    const userExists = await this.userRepository.findByUsername(username);

    if (userExists) {
      throw new ApplicationError('Username already in use');
    }

    const githubResponse = await Axios.get(`https://api.github.com/users/${username}`);
    const { name, bio, avatar_url } = githubResponse.data;
    const data = {
      name,
      bio,
      user: username,
      avatarUrl: avatar_url,
    };

    const user = await this.userRepository.create(data);

    return user;
  }
}

export default CreateUserService;
