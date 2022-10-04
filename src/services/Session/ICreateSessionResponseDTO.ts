import User from '../../database/entities/User.Entity';

export default interface ICreateSessionResponseDTO {
  user: User;
  token: string;
}
