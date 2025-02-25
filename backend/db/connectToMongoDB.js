import mongoose from "mongoose";
const connectToMongoDB=async()=>{
    try{
        console.log(process.env.MONGO_DB_URI);
         await mongoose.connect("mongodb+srv://anoushka1701:fR2jA1ExJ0WxpFGL@cluster0.pu1tu.mongodb.net/chatbox?retryWrites=true&w=majority&appName=Cluster0");
         console.log("Connected to mongodb")
    }
    catch(error)
    {
        
        
        console.log("Error connecting to mongodb",error.message);
        
    }
}

export default connectToMongoDB;