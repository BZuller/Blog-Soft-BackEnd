import UserEntity from '../../database/entities/User.Entity';
import UserRole from '../../enums/UserRoles';
import IUserModel from '../../models/IUserModel';
import ICreateUserDTO from '../../services/User/createUserService/ICreateUserRequestDTO';
import IUserRepository from '../interfaces/IUserRepository';

export default class UserRepositoryFake implements IUserRepository {
  private mockUsers: IUserModel[] = [
    {
      id: 'f129bf6f-2ede-4eae-8d40-b60249030bbr',
      name: 'User',
      email: 'user@email.com',
      username: 'username',
      password: 'test',
      role: UserRole.USER,
      created_at: undefined as unknown as Date,
      updated_at: undefined as unknown as Date,
    },
  ];

  async createUser(user: ICreateUserDTO): Promise<string | undefined> {
    const id = `48eca48e6j15fac272b62${Math.floor(Math.random() * 20) + 1}`;
    this.mockUsers.push({ id, ...user });
    return id;
  }

  async findById(id: string): Promise<UserEntity | undefined> {
    const findUser = await this.mockUsers.find((user) => user.id === id);
    if (!findUser) {
      return undefined;
    }
    return findUser;
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const findUser = await this.mockUsers.find((user) => user.email === email);
    if (!findUser) {
      return undefined;
    }
    return findUser;
  }

  async findByRole(role: string): Promise<UserEntity | undefined> {
    const findUser = await this.mockUsers.find((user) => user.role === role);
    if (!findUser) {
      return undefined;
    }
    return findUser;
  }
}
