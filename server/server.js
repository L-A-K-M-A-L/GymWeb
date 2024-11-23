require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db')

const userRoutes = require('./routes/UserRoutes');

connection();

// middleware
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3001', // Allow the frontend to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    preflightContinue: false,  // Allow preflight OPTIONS requests
    optionsSuccessStatus: 204, // Status code for successful preflight request
  };

  app.use(cors(corsOptions));

app.use('/', userRoutes);

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Server listening to port= ${port}...`);
})



app.listen(port, ()=>{
    console.log(`Port listenng to ${port}....`);
})