import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddleware from './app/middlewares/auth';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/DeliveryController';
import ProblemController from './app/controllers/ProblemController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Recipientes Routes
routes.get('/recipients/:id', RecipientController.show);
routes.get('/recipients/', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.put('/users', UserController.update);

routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.show);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/order', OrderController.index);
routes.post('/order', OrderController.store);
routes.put('/order', OrderController.update);
routes.delete('/order/:id', OrderController.delete);

routes.get('/deliveryman/:id/deliveries', DeliveryController.index);
routes.put('/deliveryman/:id', DeliveryController.update);

// routes.get('', ProblemController.show);
routes.get('/delivery/:id/problems', ProblemController.index);
routes.post('/delivery/:id/problems', ProblemController.store);
// routes.put('', ProblemController.update);
// routes.delete('/problem/:id/cancel-delivery', );

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
