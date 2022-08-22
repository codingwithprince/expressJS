import mongoose from "mongoose";


// creating schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true, unique: true},
    pass: { type: String, required: true, trim: true},
    created: { type: Date, default: Date.now}
})

// creating model || compiling schema

const userModel = mongoose.model('user', userSchema)

export default userModel;