import { EntityRepository, getRepository } from 'typeorm';
import User from '../../database/entities/User.Entity';
import ICreateUserDTO from '../../services/User/createUserService/ICreateUserDTO';
import IUserRepository from '../interfaces/IUserRepository';

@EntityRepository(User)
export default class UserRepository implements IUserRepository {
  private repository = getRepository(User);

  async create(user: ICreateUserDTO): Promise<string | undefined> {
    const newUser = this.repository.create(user);

    await this.repository.save(newUser);

    return newUser.id;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async findByRole(role: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        role,
      },
    });
    return user;
  }
}
