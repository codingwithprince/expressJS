import mongoose from "mongoose";

// creating schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: String, require: true},
    isActive: {type: Boolean, require: true},
    date: {type: Date, default: Date.now}
})

// compiling schema with creating model
const studentModel = mongoose.model('students', studentSchema);

const dataInsert = async( nm, ag, isact) =>{
 try{

// creating student document
const studentDoc = new studentModel({
    name: nm,
    age: ag,
    isActive: isact,
})

const result = await studentDoc.save()
console.log(result);

    } catch (err){
        console.log(err);
    }
}


export default dataInsert;