import mongoose from 'mongoose'

// creating schema for student
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    age: { type: Number, min: 15, max: 30, required: true},
    year: { type: Number},
    date: { type: Date, default: Date.now}
})

// creating model for student schema
const studentModel = mongoose.model('students', studentSchema)

// inserting data to student collection
const insertDoc = async(nm, ag, yr) => {
    try {
        const studentDoc = studentModel({
            name: nm,
            age: ag,
            year: yr
        })

        const result = await studentDoc.save()
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

// // all data
// const allData = async() => {
//     try {
//         const result = await studentModel.find()
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

export { insertDoc, studentModel }