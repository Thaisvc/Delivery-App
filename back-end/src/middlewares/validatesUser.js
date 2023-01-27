const { validateToken } = require('../utils/tokenCreate'); 

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
