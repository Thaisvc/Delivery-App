const fs = require('fs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key');

const createToken = (user) => {
  const payload = { id: user.id, name: user.email }; 
  return jwt.sign(
    payload, 
   JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
};

module.exports = { createToken/* , validateToken */ };
