import 'reflect-metadata';

import ApplicationError from '@shared/errors/ApplicationError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';

describe('CreateUserService', () => {
  let createUserService: CreateUserService;

  beforeAll(() => {
    const fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);
  });

  it('should create and return a new user', async () => {
    const user = await createUserService.execute('vassourita');

    expect(user.username).toBe('vassourita');
    expect(user.name).toBe('Vinicius Vassão');
  });

  it('should not be able to create a user with a already used email', async () => {
    await expect(createUserService.execute('vassourita')).rejects.toBeInstanceOf(ApplicationError);
  });
});
