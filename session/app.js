import express from 'express'
import connectDataBase from "./db/connect.js";
import web from './routes/web.js'
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express()
const port = process.env.port || 8080;
const url = process.env.url || 'mongodb://127.0.0.1:27017/'


connectDataBase(url)

const sessionStore = MongoStore.create({
    mongoUrl : 'mongodb://prince:123456@127.0.0.1:27017',
    dbName: 'schooldb',
    collectionName: 'session',
    ttl: 14*24*60*60,
    autoRemove: 'native'
})

app.use(session({
    name:'prince',
    secret: 'sessiontesting',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100000
    },
    store: sessionStore
}))

app.use(web)


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
