require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/connectDb');

const userRoutes = require('./routes/user');
const candidateRoutes = require('./routes/candidate');
const imageUploaderRoutes = require('./routes/imageUploader');
const resultRoutes = require('./routes/result');

const app = express();
const PORT =  process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND,
    credentials:true,
}))


app.use(userRoutes);
app.use(imageUploaderRoutes);
app.use(candidateRoutes);
app.use(resultRoutes);

connectDB(process.env.MONGO_URI);
app.listen(PORT,console.log('workinggg....'));