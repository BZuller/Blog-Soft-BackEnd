/* eslint-disable import/no-cycle */
import Categories from '../database/entities/Categories.Entity';
import IPostModel from '../models/IPostModel';

export default interface IPost extends IPostModel {
  title: string;
  author?: { name: string };
  content: string;
  categorie?: Categories;
}
