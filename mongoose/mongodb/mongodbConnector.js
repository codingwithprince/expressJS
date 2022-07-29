import mongoose from "mongoose";

const mongoConnect = async (DB_URL) => {
    try{

        // mongo options with authentication =====
        const DB_OPTIONS = {
            user: "prince",
            pass: "123456",
            dbName: "schooldb",
            authSource: "admin"
        }

        await mongoose.connect(DB_URL, DB_OPTIONS);
        console.log('Successfully Connected..')
    } catch (err){
        console.log('Disconnected', err);
    }
}

export default mongoConnect;