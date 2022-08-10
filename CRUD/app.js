import express from 'express'
import { join } from 'path';
import web from './routes/web.js'
import connectDB from './db/connect.js'
import { insertDoc} from './model/Student.js';

const app = express()
const port = process.env.port || 8080;
const url = process.env.url || 'mongodb://127.0.0.1:27017'

// setting up static file
app.use(express.static(join(process.cwd(), 'public')));

// setting template engine
app.set('view engine', 'ejs');

// using routes
app.use(web)

// connect database
connectDB(url)

// insert document 
// insertDoc('Esha', 17, 2018)

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})