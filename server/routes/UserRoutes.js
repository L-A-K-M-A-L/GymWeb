const { Router } = require('express');
const { registerUser, loginUser, passUserDetails, getUserLength } = require('../controllers/UserController');
const { adminLogin, addAdmin, passAdminDetails, getAdminLength } = require('../controllers/AdminController');
const { memberRegistration, passMemberDetails, getMemberLength, getMemberData, updateMemberPayment } = require('../controllers/MemBerController');
const { sendMail } = require('../controllers/Mail');  
const router = Router();

// User Routes
router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.post('/api/getUserDetails', passUserDetails);
router.get('/api/getAllUser', getUserLength);

// Admin Routes
router.post('/api/adminlogin', adminLogin);
router.post('/api/registerAdmin', addAdmin);
router.post('/api/getAdminDetails', passAdminDetails);
router.get('/api/getAllAdmin', getAdminLength);

// Member Routes
router.post('/api/memberRegistration', memberRegistration);
router.post('/api/getMemberDetails', passMemberDetails);
router.get('/api/getAllMember', getMemberLength);
router.get('/api/getMember/:email', getMemberData);
router.put('/api/updatePaymnet/:email', updateMemberPayment);

// Email Route (used to send payment confirmation email)
router.post('/api/sendMail', sendMail);

module.exports = router;
