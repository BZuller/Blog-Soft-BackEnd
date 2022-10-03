/* eslint-disable import/no-cycle */
import IPostModel from './IPostModel';

export default interface ICategoriesModel {
  id: string;
  name: string;
  posts: IPostModel[];
}
