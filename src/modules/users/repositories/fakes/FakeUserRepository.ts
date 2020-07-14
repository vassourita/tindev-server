import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/models/User';

import IUserRepository from '../IUserRepository';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async all() {
    return this.users;
  }

  public async allExcept(username: string) {
    return this.users.filter(u => u.username !== username);
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const user = this.users.find(u => u.username === username);

    return user;
  }

  public async create({ username, email }: ICreateUserDTO) {
    const user = new User();

    Object.assign(user, { username, email });

    this.users.push(user);

    return user;
  }
}

export default FakeUserRepository;
