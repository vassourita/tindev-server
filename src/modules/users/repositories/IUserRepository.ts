import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';

export default interface IUserRepository {
  all(): Promise<User[]>;

  allExcept(id: string): Promise<User[]>;

  findByUsername(username: string): Promise<User | undefined>;

  create(data: ICreateUserDTO): Promise<User>;
}
