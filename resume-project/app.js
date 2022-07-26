import express from 'express';
import { join } from 'path'
import web from './routes/web.js';

// application port
const PORT = process.env.port || 8080;

// setting express app
const app = express();

// setting static
app.use(express.static(join(process.cwd(), 'public')));

// setting template engine {{ SET }}
app.set('view engine', 'ejs');

// using app
app.use('/', web);


// setting localhost
app.listen(PORT, (err)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})