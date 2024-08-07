import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Database Already Connected");
            return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "ndhq_file_logger",
        })

        isConnected = true;
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log(error);
    }
}