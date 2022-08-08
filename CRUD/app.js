import express from 'express'
import { join } from 'path';
import web from './routes/web.js'

const app = express()
const port = process.env.port || 8080;

// setting up static file
app.use(express.static(join(process.cwd(), 'public')));

// setting template engine
app.set('view engine', 'ejs');

// using routes
app.use(web)

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})