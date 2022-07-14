import {join} from 'path';


const indexPage = (req, res)=>{
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
}
const updateStudent = (req, res)=>{
    res.send('<h1>This is for Students Update</h1>')
}
const deleteStudent = (req, res)=>{
    res.send('<h1>This is for deleting Students</h1>')
}



export { updateStudent, deleteStudent, indexPage }