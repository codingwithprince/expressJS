import { studentModel } from '../model/Student.js'

class studentController {
    static indexPage = async(req, res) =>{
        const result = await studentModel.find();
        res.render('index', { title: 'Home', data: result})
    }
    static updatePage = (req, res) => {
        res.render('update', { title: 'edit'})
    }
    static createDoc = async(req, res) => {
        try {
            const { name, age, year} = req.body
            const studentDoc = studentModel({
                name : name,
                age: age,
                year: year
            })
            await studentDoc.save()
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }
}

export default studentController;