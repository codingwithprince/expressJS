import express from 'express';

const app = express();


app.get('/', (req, res)=>{
    res.send('Express JS Application')
})

// app.route('/hello')
// .get((req, res)=>{
//     res.send('Hello')
// })
// .put((req,res)=>{
//     res.send('Second')
// })
// .delete((req,res)=>{
//     res.send('Second')
// })

app.listen(3000, ()=>{
    console.log('Server is Running at http://localhost:3000');
})