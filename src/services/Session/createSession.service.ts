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
      throw new ApiError(404, true, 'INVALID_EMAIL');
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new ApiError(404, true, 'INVALID_PASSWORD');
    }

    const token = signJwt({ sub: user.id });

    return { user, token };
  }
}
