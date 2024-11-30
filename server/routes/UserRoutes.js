const { Router } = require('express');
const { registerUser, loginUser, passUserDetails } = require('../controllers/UserController');
const { adminLogin, addAdmin, passAdminDetails } = require('../controllers/AdminController')
const { memberRegistration, passMemberDetails } = require('../controllers/MemBerController');


const router = Router();

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.post('/api/adminlogin', adminLogin);
router.post('/api/getUserDetails', passUserDetails);
router.post('/api/registerAdmin', addAdmin);
router.post('/api/memberRegistration', memberRegistration);
router.post('/api/getAdminDetails', passAdminDetails);
router.post('/api/getMemberDetails', passMemberDetails);


module.exports = router;