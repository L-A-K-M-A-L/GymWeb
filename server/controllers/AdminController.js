const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

module.exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }

        // Check if the password matches
        if (admin.password !== password) {
            return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', status: 'success', token, id: admin._id });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
};
