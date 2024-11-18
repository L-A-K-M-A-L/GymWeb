const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers/UserController');
const { adminLogin } = require('../controllers/AdminController');


const router = Router();

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.post('/api/adminlogin', adminLogin);



module.exports = router;