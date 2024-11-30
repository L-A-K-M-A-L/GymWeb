const { Router } = require('express');
const { registerUser, loginUser, passUserDetails, getUserLength } = require('../controllers/UserController');
const { adminLogin, addAdmin, passAdminDetails } = require('../controllers/AdminController')
const { memberRegistration, passMemberDetails, getMemberLength, getMemberData } = require('../controllers/MemBerController');


const router = Router();

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.post('/api/adminlogin', adminLogin);
router.post('/api/getUserDetails', passUserDetails);
router.post('/api/registerAdmin', addAdmin);
router.post('/api/memberRegistration', memberRegistration);
router.post('/api/getAdminDetails', passAdminDetails);
router.post('/api/getMemberDetails', passMemberDetails);
router.get('/api/getAllUser', getUserLength);
router.get('/api/getAllMember', getMemberLength);
router.get('/api/getMember/:email', getMemberData);

module.exports = router;