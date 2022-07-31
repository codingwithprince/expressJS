import mongoose from "mongoose";

// creating schema
const staffSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: { type: Number},
    date: {type:Date, default:Date.now}
})

// compiling schema with models
const staffModel = mongoose.model('stuff',staffSchema);

