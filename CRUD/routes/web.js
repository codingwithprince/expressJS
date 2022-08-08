import express from 'express';
import studentController from '../controllers/studentController.js';

const router = express.Router()


router.get('/', studentController.indexPage)
router.get('/update', studentController.updatePage)




export default router;