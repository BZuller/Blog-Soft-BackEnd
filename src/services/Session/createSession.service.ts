import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import auth from '../../config/auth';
import IUserRepository from '../../repositories/interfaces/IUserRepository';
import ApiError from '../../utils/apiError.utils';
import ICreateSessionRequestDTO from './ICreateSessionRequestDTO';
import ICreateSessionResponseDTO from './ICreateSessionResponseDTO';

export default class CreateSessionService {
  constructor(private userRepository: IUserRepository) {}

  public async execute(
    data: ICreateSessionRequestDTO
  ): Promise<ICreateSessionResponseDTO> {
    const { email, password } = data;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ApiError(401, true, 'Invalid email or password');
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new ApiError(401, true, 'Invalid email or password');
    }

    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });

    return { user, token };
  }
}
