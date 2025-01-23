import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express();

const PORT=process.env.PORT || 5000;
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.get("/",(req,res)=>{
    res.send("Server is ready here")
})



app.listen(5000,()=>{
    connectToMongoDB()
    console.log(`Server running on port ${PORT} `)
}
)