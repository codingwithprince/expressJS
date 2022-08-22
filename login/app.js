import express from "express";
import { join } from "path";
import router from "./routes/web.js";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.port || 8080;
const url = process.env.url || `mongodb://127.0.0.1:27017`;

// setting template engine
app.set("view engine", "ejs");

// setting static file
app.use(express.static(join(process.cwd(), "public")));

// using middleware
app.use(express.urlencoded({ extended: false }))

// setting routes
app.use(router);

// connect mongoDB
connectDB(url);

// live server

app.listen(port, function () {
  console.log(`Server is running at http://localhost:${port}`);
});
