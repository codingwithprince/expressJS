import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String},
    age: { type: Number}
})

const studentModel = mongoose.model('students', studentSchema)



export {studentModel}