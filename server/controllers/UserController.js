const userModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

//  user registration, save user to db
module.exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);

    try {
        const user = await userModel.create({
            firstName,
            lastName,
            email,
            password
        });

        const token = jwt.sign({ email: email }, process.env.JWT_SECRET);

        res.json({ message: 'User Created', status: 'success', 'token': token, id: user._id })
    }
    catch (err) {
        res.json({ message: err.message, status: 'user save failed1' });
    }
}

// user login 
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    // find user and pw from db
    const user = await userModel.findOne({
        email: email,
        password: password

    })

    if (!user) {
        return res.json(404).json({ status: 'User not Registered or Invalid Username!', error: 'Invalide Credentils!' })
    } else {
        if (user.password === password) {
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
            return res.status(200).json({ message: 'User found', status: 'success', token, id: user._id });
        }else{
            return res.json(404).json({ status: 'Invalid password', error: 'Invalide Credentils!' });
        }
    }

}