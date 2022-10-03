import 'reflect-metadata';
import config, { environments } from './config/config';
import logger from './config/logger';
import database from './config/database';
import routes from './routes';
import swaggerDocs from './config/swagger';
import 'express-async-errors';
import app from './app';

app.listen(config.port, async () => {
  logger.info(`API rodando em http://${config.publicUrl}:${config.port}`);

  await database();

  routes(app);

  if (config.env !== environments.PRODUCTION) {
    swaggerDocs(app, config.publicUrl, config.port);
  }
});

export default app;
