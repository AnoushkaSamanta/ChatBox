import express from "express"
import dotenv from "dotenv"
const app=express();

dotenv.config()
const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Server is ready here")
})
app.listen(5000,()=>console.log(`Server running on port ${PORT} `))