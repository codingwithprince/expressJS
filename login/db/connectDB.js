import mongoose from 'mongoose'

const connectDB = async (url) => {
    try {
        const options = {
            user: 'prince',
            dbName: 'schooldb',
            pass: '123456',
            authSource: 'admin'
        }
        await mongoose.connect(url, options);
        console.log('Mongo is connected....');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB