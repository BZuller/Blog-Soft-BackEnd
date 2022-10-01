import Categories from '../enums/Categories';

export default interface IPost {
  title: string;
  autor: string;
  content: string;
  categorie?: Categories;
}
