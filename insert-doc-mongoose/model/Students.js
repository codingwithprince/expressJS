import mongoose from "mongoose";


const dataInsert = async( nm, ag, isact) =>{
 try{
// creating schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: String, require: true},
    isActive: {type: Boolean, require: true},
    date: {type: Date, default: Date.now}
})

// compiling schema with creating model
const studentModel = mongoose.model('students', studentSchema);

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