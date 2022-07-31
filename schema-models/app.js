import express from 'express';
import './models/Staff.js' 
import connectMongoose from './db/connectdb.js';


const app = express();
const DB_URL = 'mongodb://localhost:27017/schooldb';

connectMongoose(DB_URL)