import 'reflect-metadata';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import ListAllUsersService from './ListAllUsersService';

describe('ListAllUsersService', () => {
  let listAllUsersService: ListAllUsersService;

  beforeEach(async () => {
    const fakeUserRepository = new FakeUserRepository();

    await fakeUserRepository.create({
      username: 'John Doe',
      email: 'johndoe@example.com',
    });

    await fakeUserRepository.create({
      username: 'John Tre',
      email: 'johntre@example.com',
    });

    await fakeUserRepository.create({
      username: 'John Qua',
      email: 'johnqua@example.com',
    });

    listAllUsersService = new ListAllUsersService(fakeUserRepository);
  });

  it('should list all users if no params are passed', async () => {
    const users = await listAllUsersService.execute();

    expect(users.length).toBe(3);
  });

  it('should list all users except the one with id passed on params', async () => {
    const users = await listAllUsersService.execute('John Qua');

    expect(users.length).toBe(2);
  });
});
