import express from 'express';
import { indexPage, aboutPage, updatePage } from '../controllers/webControllers.js';
const router = express.Router();


router.get('/', indexPage);
router.get('/about', aboutPage);
router.get('/update', updatePage)




export default router;