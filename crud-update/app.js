import mongoose from 'mongoose'
import connectDB from './db/connect.js'
import { retrieveData , updateDocById, updateOne, updateOneWithUpsert, updateDocByAge, updateDocMany} from './model/Students.js';


const url = 'mongodb://127.0.0.1:27017';
const id = '62e694116fda4e79d8dc8842'


connectDB(url);
// retrieveData()
// updateDocById(id)
// updateOne(id)
// updateOneWithUpsert(id)
// updateDocByAge(21)
updateDocMany(23)




