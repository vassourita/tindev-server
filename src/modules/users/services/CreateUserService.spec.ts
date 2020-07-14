import 'reflect-metadata';

import ApplicationError from '@shared/errors/ApplicationError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';

describe('CreateUserService', () => {
  let createUserService: CreateUserService;

  beforeAll(async () => {
    const fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);
  });

  it('should create and return a new user', async () => {
    const users = await createUserService.execute({
      username: 'John Doe',
      email: 'johndoe@example.com',
    });

    expect(users.username).toBe('John Doe');
  });

  it('should not be able to create a user with a already used email', async () => {
    await expect(createUserService.execute({
      username: 'John Doe',
      email: 'johndoe@example.com',
    })).rejects.toBeInstanceOf(ApplicationError);
  });
});
