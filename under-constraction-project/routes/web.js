import express from 'express';
import { aboutPage } from '../controllers/aboutController.js';
import { homePage } from '../controllers/homeController.js';
import { portfolioPage } from '../controllers/portfolioController.js'
import { underConstruction } from '../middleware/under-constraction.js';

// initializing router
const router = express.Router();

// router level middleware
// router.use(underConstruction)

router.use('/about', underConstruction)
router.use('/portfolio', underConstruction)


router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/portfolio', portfolioPage);





export default router;