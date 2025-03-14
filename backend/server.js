import path from "path"
import express from "express"
import cors from 'cors';
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
 import userRoutes from "./routes/userroutes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

const PORT=process.env.PORT || 5000;

const __dirname=path.resolve();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
 app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist"))) 

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
})

app.get("/",(req,res)=>{
    res.send("Server is ready here")
})



server.listen(PORT, '0.0.0.0', () => {
    connectToMongoDB()
 console.log(`Server is running on http://localhost:${PORT}`)
 console.log(process.env.JWT_SECRET);
 
console.log("NODE_ENV:", process.env.NODE_ENV);
})