// eslint-disable-next-line import/no-cycle
import Post from '../database/entities/Post.Entity';
import UserRole from '../enums/UserRoles';

export default interface IUserModel {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
  posts?: Post[];
  created_at?: Date;
  updated_at?: Date;
}
