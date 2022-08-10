import express from 'express';
import studentController from '../controllers/studentController.js';

const router = express.Router()


router.get('/', studentController.indexPage)
router.post('/', studentController.createDoc)
router.get('/update/:id', studentController.editDocument)
router.post('/update/:id', studentController.updateDocument)
router.post('/delete/:id', studentController.deleteDocument)






export default router;