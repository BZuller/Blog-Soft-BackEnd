import UserRole from '../../../enums/UserRoles';

export default interface ICreateUserDTO {
  name: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
}
