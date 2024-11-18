import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js';
import authRouts from './routes/authRoute.js'
import bodyParser from 'body-parser';

dotenv.config();

dbConnect();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/user',authRouts)

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})