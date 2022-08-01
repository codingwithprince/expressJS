import mongoose from 'mongoose';

// creating schema
const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: String},
    date: {type: Date, default: Date.now}
})

// creating model
const studentModel = mongoose.model('students', studentSchema);

// creating document
const insertDoc = async(nm, ag) => {
    try {
        const studentDoc = studentModel({
            name: nm,
            age: ag
        })
        const result = await studentDoc.save()
        console.log(result)

    } catch (error) {
        console.log(error);
    }
}

// retrieve all doc specified
const getAllDoc = async() =>{
    const result = await studentModel.find() 
    result.forEach((item)=> {
       console.log(item.name,
        item.age);
    })
}

// retrieve all doc with specific field
const getAllDocSpecified = async() =>{
    // const result = await studentModel.find().select('name age') // include
    // const result = await studentModel.find().select(['name', 'age']) // include
    // const result = await studentModel.find().select({name:1 , age:1}) // include

    // const result = await studentModel.find().select('-name -age') //exclude
    // const result = await studentModel.find().select(['-name', '-age']) //exclude
    // const result = await studentModel.find().select({name: 0, age: 0}) //exclude
    const result = await studentModel.find({}, 'name age')


    console.log(result);
}

// retrieve single document
const getSingleDoc = async() =>{
    const result = await studentModel.findById('62e694116fda4e79d8dc8842')
    console.log(result.name);
}

// retrieve single document
const getSingleDocSpecified = async() =>{
    const result = await studentModel.findById('62e694116fda4e79d8dc8842', 'name age')
    console.log(result);
}

// retrieve doc by field
const getDocByField = async() =>{
    const result = await studentModel.find({name: 'prince'})
    console.log(result[0].age, result[0].name);
}

export { insertDoc, getAllDoc, getAllDocSpecified, getSingleDoc, getSingleDocSpecified, getDocByField }