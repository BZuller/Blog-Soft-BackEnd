/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityRepository, getRepository } from 'typeorm';
import Categories from '../../database/entities/Categories.Entity';
import ICategories from '../../interfaces/ICategories';
import ICreateCategorieRequestDTO from '../../services/Categories/createCategorieService/ICreateCategorieRequestDTO';
import ICategorieRepository from '../interfaces/ICategorieRepository';

@EntityRepository(Categories)
export class CategoriesRepository implements ICategorieRepository {
  async createCategorie(
    categorie: ICreateCategorieRequestDTO
  ): Promise<string | undefined> {
    const repository = getRepository(Categories);
    const newCategorie = repository.create(categorie);

    await repository.save(newCategorie);

    return newCategorie.id;
  }

  async findCategories(): Promise<ICategories[]> {
    const categorieRepository = getRepository(Categories);
    const categoriesList = await categorieRepository.find();

    return categoriesList;
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
