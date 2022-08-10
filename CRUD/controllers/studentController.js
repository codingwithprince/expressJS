import { studentModel } from '../model/Student.js'

class studentController {
    static indexPage = async(req, res) =>{
        const result = await studentModel.find();
        res.render('index', { title: 'Home', data: result})
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

    static editDocument = async(req, res) => {
       try {
        const result = await studentModel.findById(req.params.id)
        res.render('update', {title: 'Update', data: result})
       } catch (error) {
        console.log(error);
       }         
       
    }

    static updateDocument = async(req, res) => {
       try {
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/')
       } catch (error) {
        console.log(error);
       }
      
    }

    static deleteDocument = async(req, res) => {
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            console.log(result);
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }
}

export default studentController;