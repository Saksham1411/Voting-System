require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/connectDb');

const userRoutes = require('./routes/user');
const candidateRoutes = require('./routes/candidate');
const imageUploaderRoutes = require('./routes/imageUploader');

const app = express();
const PORT =  process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND
}))


app.use(userRoutes);
app.use(imageUploaderRoutes);
app.use(candidateRoutes);

connectDB(process.env.MONGO_URI);
app.listen(PORT,console.log('workinggg....'));