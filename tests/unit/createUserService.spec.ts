import UserRole from '../../src/enums/UserRoles';
import UserRepositoryFake from '../../src/repositories/fakes/UserRepositoryFake';
import CreateUserService from '../../src/services/User/createUserService/createUser.service';

describe('CreateUserService', () => {
  const userRepository = new UserRepositoryFake();
  const sut = new CreateUserService(userRepository);

  it('should be able to create a user', async () => {
    const user = await sut.execute({
      name: 'usertesting',
      email: 'usertesting@lol.com',
      username: 'userlol',
      password: 'test',
      role: UserRole.USER,
    });
    expect(user).not.toBeNull();
  });
});
