import express from "express";
const port = 8080;
const app = express();

app.get('/', (req, res)=>{
        res.send('<h1>Ki Khobor Broh !!!</h1>')
    })



app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})
