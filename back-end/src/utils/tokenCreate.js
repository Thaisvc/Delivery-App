const fs = require('fs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key');

const createToken = (user) => {
  if (user.role === 'administrator') {
    const payload = { name: user.name, role: user.role }; 
  return jwt.sign(
    payload, 
    JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
  }

  const payload = { id: user.id, name: user.email }; 
  return jwt.sign(
    payload, 
    JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '15d' },
  );
};

const validateToken = (token) => {
  jwt.verify(token, JWT_SECRET);
  return jwt.decode(token);
};

module.exports = { createToken, validateToken };
