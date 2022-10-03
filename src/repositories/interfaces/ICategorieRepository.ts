import ICreateCategorieRequestDTO from '../../services/Categories/createCategorieService/ICreateCategorieRequestDTO';

export default interface ICategorieRepository {
  createCategorie(
    post: ICreateCategorieRequestDTO
  ): Promise<string | undefined>;
}
