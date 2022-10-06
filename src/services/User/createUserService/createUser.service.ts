import { hash } from 'bcrypt';
import UserRole from '../../../enums/UserRoles';
import IUserRepository from '../../../repositories/interfaces/IUserRepository';
import ApiError from '../../../utils/apiError.utils';
import ICreateUserDTO from './ICreateUserRequestDTO';

export default class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  public async execute(data: ICreateUserDTO): Promise<string | undefined> {
    const { name, email, username } = data;
    const userExists = await this.userRepository.findByEmail(email);
    const hashedPassword = await hash(data.password, 8);

    if (userExists) {
      throw new ApiError(422, true, 'User already exists');
    }
    const newUser = this.userRepository.createUser({
      name,
      email,
      username,
      password: hashedPassword,
      role: UserRole.USER,
    });

    return newUser;
  }
}
