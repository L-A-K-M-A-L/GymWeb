require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userRoutes = require('./routes/UserRoutes');

const app = express();
connection(); // Initialize database connection

// CORS Configuration
const corsOptions = {
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:3001', // Frontend URL
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
};

// Apply CORS Middleware
app.use(cors(corsOptions));

// Handle Preflight Requests
app.options('*', cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send(`Server is running on port ${process.env.PORT || 5000}...`);
});

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
