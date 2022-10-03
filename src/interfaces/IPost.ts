/* eslint-disable import/no-cycle */
import Categories from '../database/entities/Categories.Entity';
import User from '../database/entities/User.Entity';
import IPostModel from '../models/IPostModel';

export default interface IPost extends IPostModel {
  title: string;
  author?: User;
  content: string;
  categorie?: Categories;
}
