import { EntityRepository, getRepository } from 'typeorm';
import User from '../../database/entities/User.Entity';
import ICreateUserDTO from '../../services/User/createUserService/ICreateUserRequestDTO';
import IUserRepository from '../interfaces/IUserRepository';

@EntityRepository(User)
export class UserRepository implements IUserRepository {
  async createUser(user: ICreateUserDTO): Promise<string | undefined> {
    const repository = getRepository(User);
    const newUser = repository.create(user);

    await repository.save(newUser);

    return newUser.id;
  }

  public async findById(id: string): Promise<User | undefined> {
    const repository = getRepository(User);
    const user = await repository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const repository = getRepository(User);
    const user = await repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async findByRole(role: string): Promise<User | undefined> {
    const repository = getRepository(User);
    const user = await repository.findOne({
      where: {
        role,
      },
    });
    return user;
  }
}
