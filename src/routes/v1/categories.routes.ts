import { Router } from 'express';
import CategoriesController from '../../controllers/categories.controller';
import { CategoriesRepository } from '../../repositories/implementations/CategorieRepository';
import CreateCategorieService from '../../services/Categories/createCategorieService/createCategorie.service';
import GetCategoriesService from '../../services/Categories/getCategoriesService/getCategories.service';

const routes = Router();
const categorieRepository = new CategoriesRepository();
const createCategorieService = new CreateCategorieService(categorieRepository);
const getCategorieService = new GetCategoriesService(categorieRepository);
const categorieController = new CategoriesController(
  createCategorieService,
  getCategorieService
);

routes
  .route('/')
  .post((req, res, next) =>
    categorieController.createCategorieHandler(req, res, next)
  );

routes
  .route('/')
  .get((req, res, next) =>
    categorieController.getCategoriesHandler(req, res, next)
  );

export default routes;
