import Categories from '../../../database/entities/Categories.Entity';

export default interface ICreatePostDTO {
  title: string;
  authorId: string;
  content: string;
  categorie?: Categories;
}
