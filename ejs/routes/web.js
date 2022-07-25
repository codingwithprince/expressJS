import express from 'express';
import { indexPage, aboutPage, contactPage } from '../controllers/homeControllers.js';
const router = express.Router();


router.get('/', indexPage);
router.get('/about', aboutPage);
router.get('/contact', contactPage);


export default router;

