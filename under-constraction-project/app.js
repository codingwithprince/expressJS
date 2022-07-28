import express from 'express';
import { join } from 'path';
import web from './routes/web.js'
import { underConstruction} from './middleware/under-constraction.js'
const PORT = process.env.port || 8080;

// initializing app
const app = express();

// initializing template engine
app.set('view engine', 'ejs');

// using static file
app.use(express.static(join(process.cwd(), 'public')));

// globally middleware
// app.use(underConstruction)

// app routes
app.use('/', web)


app.listen(PORT, (err)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
