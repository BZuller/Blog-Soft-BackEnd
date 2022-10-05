import { compare } from 'bcrypt';
import IUserRepository from '../../repositories/interfaces/IUserRepository';
import ApiError from '../../utils/apiError.utils';
import { signJwt } from '../../utils/jwt.utils';
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

    const token = signJwt({ sub: user.id });

    return { user, token };
  }
}
