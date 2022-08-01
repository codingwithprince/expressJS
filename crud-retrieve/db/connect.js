import mongoose from "mongoose";

const connectMongo = async (db_url) =>{
    try {
        const db_options ={
            user: 'prince',
            pass: '123456',
            dbName: 'schooldb',
            authSource: 'admin'
        }

        await mongoose.connect(db_url, db_options);
        console.log('Successfully Connected ...............');

    } catch (error) {
        console.log(error);
    }
}

export default connectMongo;