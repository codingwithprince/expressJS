import mongoose from 'mongoose'


const connectDB = async(url) => {
  try {
    const opt = {
        user: 'prince',
        pass: '123456',
        dbName: 'schooldb',
        authSource: 'admin'
    }
    await mongoose.connect(url, opt)
    console.log(`Database is now Connected to ${opt.dbName}.........`)
  } catch (error) {
    console.log(error)
  }   
}

export default connectDB;