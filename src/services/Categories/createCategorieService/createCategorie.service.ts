import ICategorieRepository from '../../../repositories/interfaces/ICategorieRepository';
import ICreateCategorieRequestDTO from './ICreateCategorieRequestDTO';

export default class CreateCategorieService {
  constructor(private categorieRepository: ICategorieRepository) {}

  public async execute(
    data: ICreateCategorieRequestDTO
  ): Promise<string | undefined> {
    const { name } = data;
    const newCategorie = this.categorieRepository.createCategorie({ name });

    return newCategorie;
  }
}
