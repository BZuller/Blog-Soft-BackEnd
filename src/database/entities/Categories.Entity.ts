/* eslint-disable import/no-cycle */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ICategoriesModel from '../../models/ICategorieModel';
import Post from './Post.Entity';

@Entity('categories')
export default class Categories implements ICategoriesModel {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @OneToMany(() => Post, (post) => post.categorie)
  public posts: Post[];
}
