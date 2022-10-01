import UserRole from '../enums/UserRoles';

export default interface IUser {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
}
