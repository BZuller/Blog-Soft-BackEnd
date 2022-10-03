import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';
import CreateCategorieService from '../services/Categories/createCategorieService/createCategorie.service';
import ICreateCategorieRequestDTO from '../services/Categories/createCategorieService/ICreateCategorieRequestDTO';

export default class CategoriesController {
  constructor(private createCategorieService: CreateCategorieService) {}

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
}
