import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true, // change to your frontend url, e.g., http://localhost:3000 or https://yourfront
}

app.get('/',(req,res)=>{
    res.send('Hello')
})

//MiddleWare 
app.use(express.json())

app.listen(port,()=>{
    console.log('Connected to server!!!')
})