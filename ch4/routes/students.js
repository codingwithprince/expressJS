import express from "express";
import { updateStudent, deleteStudent, indexPage } from '../controllers/studentsController.js'
const router = express.Router();


router.get('/', indexPage)

router.get('/update', updateStudent )
router.get('/delete', deleteStudent )

router.get('/:id([0-9]{2})', (req, res)=>{
    res.send('This is Student id')
})


export default router;