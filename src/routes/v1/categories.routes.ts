import { Router } from 'express';
import CategoriesController from '../../controllers/categories.controller';
import CategoriesRepository from '../../repositories/implementations/CategorieRepository';
import CreateCategorieService from '../../services/Categories/createCategorieService/createCategorie.service';

const routes = Router();
const categorieRepository = new CategoriesRepository();
const createCategorieService = new CreateCategorieService(categorieRepository);
const categorieController = new CategoriesController(createCategorieService);

routes
  .route('/')
  .post((req, res, next) =>
    categorieController.createCategorieHandler(req, res, next)
  );

export default routes;
