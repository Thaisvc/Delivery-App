require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const payload = { id: user.id, name: user.email }; 
  return jwt.sign(
    payload, 
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
};

module.exports = { createToken/* , validateToken */ };
