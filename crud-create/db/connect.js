import mongoose from "mongoose";

const connectdb = async (DB_URL) => {
    try{
        const DB_OPTIONS = {
            user: 'prince',
            pass: '123456',
            dbName: 'schooldb',
            authSource: 'admin'
        }
        await mongoose.connect(DB_URL, DB_OPTIONS)
        console.log('Successfully Connected..........');
    } catch(err){
        console.log(err)
    }
}

export default connectdb;