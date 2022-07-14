import express from "express";
import stu from "./routes/students.js";
const app = express();
const port = 8080;

app.use('/', stu);

app.listen(port, (err)=>{
    console.log(`Server is running at http://localhost:${port}`);
})