const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPWD
    }
  });

  module.exports.sendMail = (req, res ) => {
    const { email, plan, date, time } = req.body;
  
    const mailOptions = {
      from: 'lakmalprasannakd@gmail.com', 
        to: email,
        subject: 'Payment Confirmation',
        text: `Dear user,

    Your payment for the ${plan} plan has been successfully processed on ${date} at ${time}.

    Thank you for choosing our service!

    Best regards,
    Stamina Fitness Team`  
    };
  }