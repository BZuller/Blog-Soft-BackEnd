import Post from '../../database/entities/Post.Entity';
import UserRole from '../../enums/UserRoles';

declare namespace Express {
  export interface Request {
    user: {
      id: string;
      name: string;
      email: string;
      username: string;
      password: string;
      role: UserRole;
      posts: Post[];
    };
  }
}
