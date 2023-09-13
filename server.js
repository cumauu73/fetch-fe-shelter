// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Dummy user data (replace with a database in a real application)
const users = [
  { id: 1, name: 'cuma ugur', email: 'cumauguur@gmail.com' },
  { id: 2, name: 'fetch rewards', email: 'work@fetch.com' },
];

// Dummy authentication token (replace with JWT or a secure token in a real application)
const authToken = 'mysecrettoken';

// Authentication endpoint (POST /auth/login)
app.post('/auth/login', (req, res) => {
  const { name, email } = req.body;

  // Dummy authentication logic (replace with real authentication logic)
  const user = users.find((user) => user.email === email && user.name === name);

  if (user) {
    // Simulate generating and setting an authentication token as an HttpOnly cookie
    res.cookie('fetch-access-token', authToken, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration

    // Return a success response
    return res.status(200).json({ message: 'Authentication successful' });
  }

  // If authentication fails, return an error response
  return res.status(401).json({ message: 'Authentication failed' });
});

// Logout endpoint (POST /auth/logout)
app.post('/auth/logout', (req, res) => {
  // Clear the authentication cookie to log the user out
  res.clearCookie('fetch-access-token');
  return res.status(200).json({ message: 'Logout successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
