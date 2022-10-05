import ICategories from '../../../interfaces/ICategories';
import ICategorieRepository from '../../../repositories/interfaces/ICategorieRepository';

export default class GetCategoriesService {
  constructor(private categoriesRepository: ICategorieRepository) {}

  public async execute(): Promise<ICategories[]> {
    const categoriesList = await this.categoriesRepository.findCategories();

    return categoriesList;
  }
}
