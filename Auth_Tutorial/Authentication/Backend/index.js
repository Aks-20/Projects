import express from 'express';
import authRoutes from "./Routes/auth.route.js"
import { connectDb } from './Db/ConnectDb.js';

import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
const app=express()
const PORT=process.env.PORT|| 5000
app.use(express.json()) //allow us to parse incoming requests in json payloads

app.use("/api/v1/",authRoutes)
app.listen(PORT,()=>{
    connectDb()
    console.log("Server is Listening on port:",PORT);
    
})
