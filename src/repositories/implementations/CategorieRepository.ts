import { EntityRepository, getRepository } from 'typeorm';
import Categories from '../../database/entities/Categories.Entity';
import ICreateCategorieRequestDTO from '../../services/Categories/createCategorieService/ICreateCategorieRequestDTO';
import ICategorieRepository from '../interfaces/ICategorieRepository';

@EntityRepository(Categories)
export default class CategoriesRepository implements ICategorieRepository {
  async createCategorie(
    categorie: ICreateCategorieRequestDTO
  ): Promise<string | undefined> {
    const repository = getRepository(Categories);
    const newCategorie = repository.create(categorie);

    await repository.save(newCategorie);

    return newCategorie.id;
  }

  public async findById(id: string): Promise<Categories | undefined> {
    const repository = getRepository(Categories);
    const categorie = await repository.findOne({
      where: {
        id,
      },
    });

    return categorie;
  }
}
