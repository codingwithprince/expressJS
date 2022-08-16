import express from "express";
import studentController from "../controllers/StudentController.js";

const router = express.Router()



router.get('/', studentController.indexPage)
router.get('/deleteSession', studentController.des_session)
router.get('/regenerate', studentController.regn_session)
router.get('/ex', studentController.session_ex)
router.get('/all', studentController.find_all)





export default router