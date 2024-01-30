import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './router/index.js';


const port = 8800;
const app = express();
dotenv.config();

const MONGO_OPTION = {
    // socketTimeoutMS: 30000,
    autoIndex: false,
    retryWrites: true,
    dbName: "tictactoe-app"
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,MONGO_OPTION);
        console.log(`Connected to MongoDB:${conn.connection.host}`); 
    } catch (error) {
        console.log("Error in connection to MongoDB"); 
    }
}

//middleware
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
}));

try {
    await connectDB();
    app.listen(port, () => console.log("Server's running!")); 
} catch (err) {
    console.log(`Error in ${port}: ${err}`);
}

app.use('/', router());