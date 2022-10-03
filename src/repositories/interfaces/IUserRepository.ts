import User from '../../database/entities/User.Entity';
import ICreateUserDTO from '../../services/User/createUserService/ICreateUserRequestDTO';

export default interface IUserRepository {
  createUser(user: ICreateUserDTO): Promise<string | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByRole(role: string): Promise<User | undefined>;
}
