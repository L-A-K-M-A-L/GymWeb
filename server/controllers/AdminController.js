const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

module.exports.addAdmin = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const existingAdmin = await adminModel.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Email already registered', status: 'fail' });
        }

        const admin = await adminModel.create({
            firstName,
            lastName,
            email,
            password,
        });


        res.status(201).json({ message: 'Admin registered', status: 'success', id: admin._id });
    } catch (err) {
        res.status(500).json({ message: 'Registration failed', status: 'error', error: err.message });
    }
};


module.exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {

        const admin = await adminModel.findOne({ email });
        console.log(admin);
        if (!admin) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }


        if (admin.password !== password) {
            return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET, { expiresIn: '2h' });
    

        res.status(200).json({ message: 'Login successful', token, id: admin._id });
        
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
};

module.exports.passAdminDetails = async (req, res) => {
    const { email } = req.body;

    try {
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }

        res.status(200).json({ status: 'success', admin });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
};

module.exports.getAdminLength = async (req, res) => {
    try {
        const count = await adminModel.countDocuments();
        res.status(200).json({ status: 'success', count });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
    }
}