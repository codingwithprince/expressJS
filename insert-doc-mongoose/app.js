import express from 'express'
import mongoose from 'mongoose';
import dataInsert from './model/Students.js';
import connectdb from './db/connect.js';
const DB_URL = 'mongodb://127.0.0.1:27017/schooldb';

const app = express()

connectdb(DB_URL)

// dataInsert()

dataInsert('esha', 17, false)