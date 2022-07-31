import mongoose from "mongoose";

const connectMongoose = async (DB_URL) => {
    try{
        const DB_OPTIONS = {
            user: 'prince',
            pass: '123456',
            dbName: 'schooldb',
            authSource: 'admin'
        }

       await mongoose.connect(DB_URL, DB_OPTIONS)
       console.log('Connected Successfully...')
    } catch(err){
        console.log(err);
    }

}

export default connectMongoose;