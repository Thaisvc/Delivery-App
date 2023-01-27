const { validateToken } = require('../utils/token'); 

const validatesUser = (req, _res, next) => {
  const { authorization } = req.headers;

  try {
    validateToken(authorization);
    next();
  } catch (e) {
   console.log(e);
  }
};

module.exports = validatesUser;
