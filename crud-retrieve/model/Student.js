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
    // const result = await studentModel.find({age: 21})
    console.log(result[0].age, result[0].name);
}

// retrieve doc by specified field
const getDocFieldBySpecifiedField = async() =>{
    const result = await studentModel.find({name: 'prince'}).select('name age')
    console.log(result);
}

// retrieve limited document
const getLimitedDoc = async() =>{
    const result = await studentModel.find().limit(2)
    // const result = await studentModel.find({}, null, { limit : 2})
    console.log(result);
}

// retrieve skip document
const getSkipDocument = async() =>{
    const result = await studentModel.find().skip(1)
    // const result = await studentModel.find({}, null, { skip : 2})
    console.log(result);
}

// retrieve total document
const getDocCount = async() =>{
    const result = await studentModel.find().countDocuments()
    console.log(result);
}

// retrieve sorted document
const getSortDoc = async() =>{
    // const result = await studentModel.find().sort({age: 1}) // choto theke boro
    const result = await studentModel.find().sort({age: -1}) // boro theke choto
    console.log(result);
}

// retrieve mixed document
const mixedDoc = async() => {
    // first {} is for all document
    // second {} is for specified values
    // third {} is for options
    const result = await studentModel.find({}, { name: 1, age: 1}, { limit: 3, skip: 1, sort: { age: -1}})
    console.log(result);
}

// compare document
const compDoc = async() => {
    // const result = await studentModel.find({ age: { $gt: 16 }}) // greater than
    // const result = await studentModel.find({ age: { $gte: 16 }}) // greater than equal
    // const result = await studentModel.find({ age: { $lt: 20 }}) // less than
    // const result = await studentModel.find({ age: { $lte: 20 }}) // less than equal
    // const result = await studentModel.find({ age: { $ne: 21 }}) // not equal
    // const result = await studentModel.find({ age: { $in: [21, 17] }}) // find array's valued data
    const result = await studentModel.find({ age: { $nin: [21, 17] }}) // find without array's valued data
    console.log(result);
}

// logical query operator
const logDoc = async() =>{
    // and + or + not + nor
    // const result = await studentModel.find({$and : [{age: 21}, {name: 'prince'}]}) // duitai true howa lgbe
    // const result = await studentModel.find({$or : [{age: 21}, {name: 'prince'}]}) // j kono ekta true holei hobe
    // const result = await studentModel.find({age : { $not: {$lte : 16}}}) // != and <= 16 
    const result = await studentModel.find({$nor : [{age: 21}, {name: 'prince'}]}) // j kono ekta millei asbe na oi data

    console.log(result);
}



export { insertDoc, getAllDoc, getAllDocSpecified, getSingleDoc,
     getSingleDocSpecified, getDocByField, 
     getDocFieldBySpecifiedField, getLimitedDoc, getSkipDocument, getDocCount,
     getSortDoc, mixedDoc, compDoc, logDoc }