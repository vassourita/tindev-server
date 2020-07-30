import { Repository, getRepository, Equal, Not } from 'typeorm';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '@modules/users/repositories/IUserRepository';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async all() {
    const users = await this.ormRepository.find();

    return users;
  }

  public async findByUsername(username: string) {
    const user = await this.ormRepository.findOne({
      where: { username: Equal(username) },
    });

    return user;
  }

  public async allExcept(username: string) {
    const users = await this.ormRepository.find({
      where: { username: Not(username) },
    });

    return users;
  }

  public async create(data: ICreateUserDTO) {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
