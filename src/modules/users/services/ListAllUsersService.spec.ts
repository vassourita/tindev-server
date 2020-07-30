import 'reflect-metadata';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import ListAllUsersService from './ListAllUsersService';

describe('ListAllUsersService', () => {
  let listAllUsersService: ListAllUsersService;

  beforeEach(async () => {
    const fakeUserRepository = new FakeUserRepository();

    await fakeUserRepository.create({
      name: 'John Doe',
      username: 'johndoe',
      avatarUrl: '',
      bio: '',
    });

    await fakeUserRepository.create({
      name: 'John Tre',
      username: 'johntre',
      avatarUrl: '',
      bio: '',
    });

    await fakeUserRepository.create({
      name: 'John Qua',
      username: 'johnqua',
      avatarUrl: '',
      bio: '',
    });

    listAllUsersService = new ListAllUsersService(fakeUserRepository);
  });

  it('should list all users if no params are passed', async () => {
    const users = await listAllUsersService.execute();

    expect(users.length).toBe(3);
  });

  it('should list all users except the one with username passed on params', async () => {
    const users = await listAllUsersService.execute('johnqua');

    expect(users.length).toBe(2);
  });
});
