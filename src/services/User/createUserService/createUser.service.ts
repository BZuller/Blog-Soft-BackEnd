import { hash } from 'bcrypt';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../../../repositories/implementations/UserRepository';
import ApiError from '../../../utils/apiError.utils';
import ICreateUserDTO from './ICreateUserDTO';

export default class CreateUserService {
  public async execute(user: ICreateUserDTO): Promise<string | undefined> {
    const { name, email, username, role } = user;
    const repository = getCustomRepository(UserRepository);
    const userExists = await repository.findByEmail(email);
    const hashedPassword = await hash(user.password, 8);

    if (userExists) {
      throw new ApiError(422, true, 'User already exists');
    }
    const newUser = repository.create({
      name,
      email,
      username,
      password: hashedPassword,
      role,
    });
    return newUser;
  }
}
