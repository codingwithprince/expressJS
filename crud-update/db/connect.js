import mongoose from 'mongoose';

const connectDB = async(db_url) => {
    try{
        const db_option = {
            user: 'prince',
            pass: '123456',
            dbName: 'schooldb',
            authSource: 'admin'
        }
        await mongoose.connect(db_url, db_option)
        console.log('Successfully collected to the server.........');
    } catch(err){
        console.log(err);
    }
}

export default connectDB;