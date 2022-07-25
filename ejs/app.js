import express from 'express'
import { join } from 'path';
import webRoutes from './routes/web.js';

// initializing app
const app = express()
const port = process.env.port || 8080;

// setting static public
app.use(express.static(join(process.cwd(), 'public')))

// setting template engine EJS
app.set('view engine', 'ejs');

// using routes
app.use('/', webRoutes);

app.listen(port, (err)=>{
    console.log(`Server is running at http://localhost:${port}`);
})

