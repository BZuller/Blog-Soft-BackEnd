import { Router } from 'express';
import SessionController from '../../controllers/session.controller';
import { UserRepository } from '../../repositories/implementations/UserRepository';
import CreateSessionService from '../../services/Session/createSession.service';

const routes = Router();
const userRepository = new UserRepository();
const createSessionService = new CreateSessionService(userRepository);
const sessionController = new SessionController(createSessionService);

routes
  .route('/')
  .post((req, res, next) =>
    sessionController.createSessionHandler(req, res, next)
  );

export default routes;
