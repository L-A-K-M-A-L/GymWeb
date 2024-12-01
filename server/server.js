require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userRoutes = require('./routes/UserRoutes');

const app = express();
connection();

const corsOptions = {
  origin: 'http://localhost:3001', // change to your frontend URL in production if necessary
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send(`Server listening on port ${process.env.PORT}...`);
});

// Export as serverless function
module.exports = (req, res) => {
  app(req, res);
};
