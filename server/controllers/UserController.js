const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

module.exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);

    try {

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered', status: 'fail' });
        }


        const user = await userModel.create({
            firstName,
            lastName,
            email,
            password,
        });


        res.status(201).json({ message: 'User registered', status: 'success', id: user._id });
    } catch (err) {
        res.status(500).json({ message: 'Registration failed', status: 'error', error: err.message });
    }
};

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({ message: 'Login successful', token, id: user._id });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
};

module.exports.passUserDetails = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }

        res.status(200).json({ status: 'success', user });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
}


module.exports.getUserLength = async (req, res) => {
    try {

        const userCount = await userModel.countDocuments();

        return res.status(200).json({ count: userCount });
    } catch (error) {
        console.error("Error fetching user count:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
