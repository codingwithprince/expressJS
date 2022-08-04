import mongoose from 'mongoose';
import {connect} from './db/connect.js'
import { insertDoc, readDoc, updateDoc, deleteDoc } from './model/Staff.js'

const url = 'mongodb://127.0.0.1:27017/'

connect(url)

// insertDoc('princhu ok', 25) // Create
// readDoc() // Retrieve
// updateDoc()
deleteDoc()