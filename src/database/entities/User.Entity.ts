/* eslint-disable import/no-cycle */
import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  Column,
  OneToMany,
} from 'typeorm';
import UserRole from '../../enums/UserRoles';
import IUserModel from '../../models/IUserModel';
import Post from './Post.Entity';

@Entity('users')
export default class User implements IUserModel {
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

  @OneToMany(() => Post, (posts) => posts.author)
  posts?: Post[];

  @CreateDateColumn()
  public created_at?: Date;

  @UpdateDateColumn()
  public updated_at?: Date;
}
