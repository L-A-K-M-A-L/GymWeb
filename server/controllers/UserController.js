const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

module.exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);

    try {
        // Check for duplicate email
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered', status: 'fail' });
        }

        // Save user to the database
        const user = await userModel.create({
            firstName,
            lastName,
            email,
            password,
        });

        // Generate JWT token
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered', status: 'success', token, id: user._id });
    } catch (err) {
        res.status(500).json({ message: 'Registration failed', status: 'error', error: err.message });
    }
};

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', status: 'success', token, id: user._id });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
};
