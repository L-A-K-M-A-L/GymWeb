require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./config/db'); // Database connection
const userRoutes = require('./routes/UserRoutes'); // User routes

const app = express();
connection(); // Initialize database connection

// Middleware
app.use(express.json());

// CORS Configuration
const corsOptions = {
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:3001', // Frontend URL from environment or localhost
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Enable cookies/auth headers
    preflightContinue: false,
    optionsSuccessStatus: 200, // Handle preflight responses with status 200
};
app.use(cors(corsOptions));

// Preflight Handling for All Routes
app.options('*', cors(corsOptions));

// Routes
app.use('/', userRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send(`Server is running on port ${process.env.PORT || 5000}...`);
});

// Server Listener
const port = process.env.PORT || 5000; // Fallback to 5000 if PORT is not defined
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
