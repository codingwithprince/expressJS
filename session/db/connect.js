import mongoose from "mongoose";

const connectDataBase = async(url) =>{
    try {
        const db_opt ={
            user : 'prince',
            pass: '123456',
            dbName : 'schooldb',
            authSource: 'admin'
        }
        await mongoose.connect(url, db_opt)
        console.log('Database is now connected.......');
    } catch (error) {
        console.log(error);
    }
}

export default connectDataBase