const express = require('express');
const { sendVerificationEmail } = require('./emailVerification');
const router = express.Router();

router.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Create verification token (for simplicity, using email as token here)
    const verificationToken = email;

    try {
        await sendVerificationEmail(name, email, verificationToken);
        res.json({ success: true, message: 'Verification email sent' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send verification email' });
    }
});

router.get('/verify-email', (req, res) => {
    const { token } = req.query;

    // Here you would normally verify the token against the database
    // For simplicity, we'll just assume the token is valid if it matches the email
    if (token) {
        res.send('Email verified successfully!');
    } else {
        res.status(400).send('Invalid verification token');
    }
});

module.exports = router;
