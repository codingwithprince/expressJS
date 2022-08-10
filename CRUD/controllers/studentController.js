import { studentModel } from '../model/Student.js'

class studentController {
    static indexPage = async(req, res) =>{
        const result = await studentModel.find();
        res.render('index', { title: 'home', data: result})
    }

    static updatePage = (req, res) => {
        res.render('update', { title: 'edit'})
    }
}

export default studentController;