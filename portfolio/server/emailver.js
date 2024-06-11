const nodemailer = require('nodemailer');
const config = require('./config');

let transporter = nodemailer.createTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

const sendVerificationEmail = (name, email, token) => {
    const mailOptions = {
        from: config.email.user,
        to: email,
        subject: 'Email Verification',
        text: `Hello ${name},\n\nPlease verify your email by clicking the following link: \nhttp://localhost:3000/verify-email?token=${token}\n\nThank you!`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };
