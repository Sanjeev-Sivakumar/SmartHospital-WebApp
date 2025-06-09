const express = require('express');
const User = require('C:\Users\Sanjeev Kumar S\Desktop\HACKATHONS\Hackathon 1 (Hospital management system)\models\User.js');
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv'); // For loading environment variables

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Simple input validation (you can add more validation as needed)
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password using bcrypt
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token with an expiration time of 1 hour
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,  // Use the secret from the environment variables
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      token, // Send the token back to the client
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
