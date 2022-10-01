import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  Column,
  OneToMany,
} from 'typeorm';
import UserRole from '../../enums/UserRoles';
import IUser from '../../interfaces/IUser';
// eslint-disable-next-line import/no-cycle
import Post from './Post.Entity';

@Entity('users')
export default class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  })
  role: UserRole;

  @OneToMany(() => Post, (post) => post.author)
  post: Post;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
