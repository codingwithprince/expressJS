import mongoose from "mongoose";

// creating schema for staff collection
const staffSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true, min: 20, max: 40},
    date: { type: Date, default: Date.now}
})

// creating model for staff schema
const staffModel = mongoose.model('staff', staffSchema)

// creating doc for staff
const insertDoc = async( nm, ag) =>{
    try {
        const staffDoc = staffModel({
            name: nm,
            age: ag
        })
        const result = await staffDoc.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// read document

const readDoc = async() =>{
    try {
        const result = await staffModel.find({age: 25}, {name: 1}, { sort: {age: 1}})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// update document
const updateDoc = async() =>{
    try {
        // const result = await staffModel.findByIdAndUpdate('62ebdfe2ba3b948ef592305f', { name: 'prince update'})
        const result = await staffModel.updateOne({age: 23}, {name: 'Prince ahmed'}, { upsert: true, returnDocument: 'after'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// delete document =======================================================================================================
const deleteDoc = async() => {
    try {
        // const result = await staffModel.findByIdAndDelete('62ebdf5195936e14e79b0d8b')
        // const result = await staffModel.deleteMany({ _id: '62ebf2e313fb739e590c0720'})
        const result = await staffModel.deleteOne({ _id: '62ebf2e313fb739e590c0720'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export { insertDoc, readDoc, updateDoc, deleteDoc }