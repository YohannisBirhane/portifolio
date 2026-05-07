const JWT = require('../utils/jwt');
const helpers = require('../utils/helpers');

// Hardcoded admin credentials (you can move to database later)
const ADMIN_USERNAME = 'johnadmin';
const ADMIN_PASSWORD_HASH = helpers.hashPassword('3141Ybe#');

exports.adminLogin = (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    if (username !== ADMIN_USERNAME) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordHash = helpers.hashPassword(password);
    if (passwordHash !== ADMIN_PASSWORD_HASH) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = JWT.generateToken({ username: ADMIN_USERNAME, role: 'admin' });

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: { username: ADMIN_USERNAME, role: 'admin' },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminLogout = (req, res) => {
  res.json({ success: true, message: 'Logout successful' });
};

exports.verifyAdmin = (req, res) => {
  res.json({
    success: true,
    message: 'Admin authenticated',
    user: req.admin,
  });
};
