import express from 'express';
import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutControllers.js'
import { serviceController } from '../controllers/servicesController.js';
import { skillController } from '../controllers/skillController.js';

const route = express.Router();


route.get('/', homeController);
route.get('/about', aboutController);
route.get('/services', serviceController);
route.get('/skills', skillController);


export default route

