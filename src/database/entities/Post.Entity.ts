/* eslint-disable import/no-cycle */
import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import IPostModel from '../../models/IPostModel';
import Categories from './Categories.Entity';
import User from './User.Entity';

@Entity('posts')
export default class Post implements IPostModel {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => Categories, (categories) => categories.posts)
  categorie: Categories;

  @ManyToOne(() => User, (user) => user.posts)
  public author: User;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
