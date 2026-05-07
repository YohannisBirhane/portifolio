const jwt = require('../utils/jwt');

const authenticateToken = (req, res, next) => {
	const header = req.headers.authorization;

	if (!header || !header.startsWith('Bearer ')) {
		return res.status(401).json({ message: 'Authorization token is required' });
	}

	const token = header.split(' ')[1];

	try {
		req.user = jwt.verifyToken(token);
		return next();
	} catch (error) {
		return res.status(401).json({ message: 'Invalid or expired token' });
	}
};

module.exports = {
	authenticateToken,
};
