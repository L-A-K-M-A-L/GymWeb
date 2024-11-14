require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db')


// db connection
connection();

// middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`Server listening to port= ${port}...`);
})

app.listen(port, ()=>{
    console.log(`Port listenng to ${port}....`);
})