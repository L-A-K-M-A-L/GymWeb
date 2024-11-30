const memberModel = require('../models/memberModel');

module.exports.memberRegistration = async (req, res) => {
    const { email, membership, phone, age, planActivateDate } = req.body;

    try {
        const existingMember = await memberModel.findOne({ email });
        if (existingMember) {
            return res.status(400).json({ message: 'Email already registered', status: 'fail' });
        }

        const member = await memberModel.create({
            email,
            membership,
            phone,
            age,
            planActivateDate
        });

        res.status(201).json({ message: 'Member registered', status: 'success', id: member._id });

    } catch (err) {
        res.status(500).json({ message: 'Registration failed', status: 'error', error: err.message });
    }
}

module.exports.passMemberDetails = async (req, res) => {
    const { email } = req.body;

    try {
        const member = await memberModel.findOne({email});
        if (!member) {
            return res.status(404).json({ status: 'fail', message: 'Member not found' });
        }

        res.status(200).json({ status: 'success', member });
    }catch(err){
        res.status(500).json({ message: 'Internal server error', status: 'error', error: err.message });
    }
}


module.exports.getMemberLength = async (req, res) => {
    try {
  
      const userCount = await memberModel.countDocuments();
  
      return res.status(200).json({ count: userCount });
    } catch (error) {
      console.error("Error fetching user count:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  module.exports.getMemberData = async (req, res) => {
    const email = req.params.email;
  
    try {
      const member = await memberModel.findOne({ email });
      if (!member) {
        return res.status(404).json({ 
          status: 'fail', 
          message: `No member found with email: ${email}` 
        });
      }
      return res.status(200).json({ 
        status: 'success', 
        member 
      });
    } catch (err) {
      console.error('Error fetching member data:', err);
      return res.status(500).json({ 
        status: 'error', 
        message: 'Internal server error', 
        error: err.message 
      });
    }
  };
  