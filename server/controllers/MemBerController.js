const memberModel = require('../models/memberModel');

module.exports.memberRegistration = async (req, res) => {
    const { email, membership, phone, height, weight } = req.body;

    try {
        const existingMember = await memberModel.findOne({ email });
        if (existingMember) {
            return res.status(400).json({ message: 'Email already registered', status: 'fail' });
        }

        const member = await memberModel.create({
            email,
            membership,
            phone,
            height,
            weight,
        });

        res.status(201).json({ message: 'Member registered', status: 'success', id: member._id });

    } catch (err) {
        res.status(500).json({ message: 'Registration failed', status: 'error', error: err.message });
    }
}