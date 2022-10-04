/* eslint-disable import/no-cycle */
import Categories from '../database/entities/Categories.Entity';

export default interface IPostModel {
  id?: string;
  title: string;
  authorId?: string;
  content: string;
  categorieId?: Categories;
  created_at?: Date;
  updated_at?: Date;
}
