import User from '../../database/entities/User.Entity';

export default interface IUserRepository {
  create(user: User): Promise<string | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByRole(role: string): Promise<User | undefined>;
}
