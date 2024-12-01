require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db')

const userRoutes = require('./routes/UserRoutes');

connection();

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/', userRoutes);

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Server listening to port= ${port}...`);
})



app.listen(port, () => {
    console.log(`Port listenng to ${port}....`);
})