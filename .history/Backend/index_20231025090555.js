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

//database connection
mongoose.set('strictQuery',false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true , useUnifiedTopology: true})
        console.log('MongoDB is connected!!!')
    } catch (error) {
        console.error('Connected fail!!!')
    }
}

app.get('/',(req,res)=>{
    res.send('Hello')
})

//MiddleWare 
app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOptions))

app.listen(port,()=>{
    connectDB();
    console.log('Connected to server!!!' + port)
})

