import express from 'express';
import stu from './Routes/students.js';
import teachers from './Routes/teachers.js'
const app = express()
const port = 8080;


app.use('/students', stu)
app.use('/teachers', teachers)

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})