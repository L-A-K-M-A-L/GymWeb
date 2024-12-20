require('dotenv').config();
const timeout = require('connect-timeout');
const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userRoutes = require('./routes/UserRoutes');

const app = express();
connection();

const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
// app.use(timeout('120000'));
app.use(express.json());
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send(`Server is running on port ${process.env.PORT || 5000}...`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
