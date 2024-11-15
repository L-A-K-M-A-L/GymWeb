require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db')

const userRoutes = require('./routes/UserRoutes');

connection();

// middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001', // specify the origin you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // if you need to send cookies or other credentials
  }));

app.use('/', userRoutes);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`Server listening to port= ${port}...`);
})



app.listen(port, ()=>{
    console.log(`Port listenng to ${port}....`);
})