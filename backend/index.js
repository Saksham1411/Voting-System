require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./config/connectDb');
const userRoutes = require('./routes/user');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(userRoutes);

connectDB(process.env.MONGO_URI);
app.listen(PORT,console.log('workinggg....'));