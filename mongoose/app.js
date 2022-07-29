import express from 'express';
import mongoose from 'mongoose';
import mongoConnect from './mongodb/mongodbConnector.js';
const DB_URL = "mongodb://localhost:27017/schooldb";

const app = express();

mongoConnect(DB_URL);


