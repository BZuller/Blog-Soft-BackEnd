import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';
import CreateCategorieService from '../services/Categories/createCategorieService/createCategorie.service';
import ICreateCategorieRequestDTO from '../services/Categories/createCategorieService/ICreateCategorieRequestDTO';
import GetCategoriesService from '../services/Categories/getCategoriesService/getCategories.service';

export default class CategoriesController {
  constructor(
    private createCategorieService: CreateCategorieService,
    private getCategorieService: GetCategoriesService
  ) {}

  public async createCategorieHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const { name } = body;

      const data: ICreateCategorieRequestDTO = { name };

      const categorie = await this.createCategorieService.execute(data);
      return res.status(StatusCodes.CREATED).json(categorie);
    } catch (error: any) {
      logger.error(`CategoriesController: ${error.message}`);
      return next(error);
    }
  }

  public async getCategoriesHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const categoriesList = await this.getCategorieService.execute();

      return res.json(categoriesList);
    } catch (error: any) {
      logger.error(`CategorieController: ${error.message}`);
      return next(error);
    }
  }
}
