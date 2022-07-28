import express from 'express';
import web from './routes/web.js'
import { join } from 'path'
 

const app = express()
const port = process.env.port || 8080;

// setting engine ejs
app.set('view engine', 'ejs')


app.use(express.static(join(process.cwd(), 'public')))

app.use('/', web);


app.listen(port, (err)=>{
    console.log(`Server is running at http://localhost:${port}`)
})
