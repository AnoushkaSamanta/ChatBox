import mongoose from "mongoose";
const connectToMongoDB=async()=>{
    try{
        console.log(process.env.MONGO_DB_URI);
         await mongoose.connect(process.env.MONGO_DB_URI);
         console.log("Connected to mongodb")
    }
    catch(error)
    {
        
        
        console.log("Error connecting to mongodb",error.message);
        
    }
}

export default connectToMongoDB;