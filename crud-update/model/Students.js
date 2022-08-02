import mongoose from "mongoose";


// creating schema
const studentSchema = new mongoose.Schema({
    name: { type: String},
    age: { type: Number},
    isActive: { type: Boolean},
    date: { type: Date, default: Date.now}
})

// creating model
const studentModel = mongoose.model('students', studentSchema);


// retrieve data
const retrieveData = async() =>{
    const result = await studentModel.find({}, {name: 1, age:1}, { sort: { age: -1}, limit: 3})
    console.log(result);
}


// find by id and then update
const updateDocById = async( id ) => {
    try {
        const result = await studentModel.findByIdAndUpdate(id, {name: 'prince'}, {returnDocument: 'after'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    
}

// update one
const updateOne = async( id ) => {
    try {
        const result = await studentModel.updateOne({_id: id}, {name: 'prince ahmed'}, {returnDocument: 'after'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// update One With Upsert { same id or specified document na thakle upsert auto create kore nibe}
const updateOneWithUpsert = async( id ) => {
    try {
        const result = await studentModel.updateOne({_id: id}, {name: 'prince', age: 23}, {upsert: true})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// update doc by age { jodi same valuer more than 1 doc thake tahole first er doc ta update hobe cause .updateOne ache}
const updateDocByAge = async( ag ) => {
    try {
        const result = await studentModel.updateOne({age: ag}, {name: 'prince pl'}, {upsert: true})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const updateDocMany = async( ag ) => {
    try {
        const result = await studentModel.updateMany({age: ag}, {name: 'prince same'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export { retrieveData, updateDocById, updateOne, updateOneWithUpsert, updateDocByAge, updateDocMany }
