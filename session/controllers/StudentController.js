import { studentModel } from '../model/Student.js'
class studentController {
    static indexPage = (req, res) =>{
        res.send(`Hello ${req.session.cookie.count}`)
    }

    static des_session = (req, res) => {
        req.session.destroy(()=>{
            console.log('Session deleted...');
        })
        res.send('Session deleted')
    }
    
    static regn_session = (req,res) => {
        req.session.regenerate(()=>{
            console.log(`Session regenerated and new id is ${req.session.id}`);
        })
        res.send('Session regenerated......')
    }

    static session_ex =(req, res)=>{
        if(req.session.count){
            req.session.count ++
        } else {
            req.session.count = 1
        }
        res.send(`Count : ${req.session.count}`)
    }

    static find_all = async(req, res) => {
        try {
            const result = await studentModel.find()
            res.send(`${result}`)
        } catch (error) {
            console.log(error);
        }
    }
}


export default studentController