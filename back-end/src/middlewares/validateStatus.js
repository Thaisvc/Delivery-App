const validateStatus = (req, res, next) => {
  try {
    const { status } = req.body;
    console.log(status);
    switch (status) {
      case 'Pendente':
        next();
        break;
      case 'Preparando':
        next();
        break;
      case 'Em Trânsito':
        next();
        break;
      case 'Entregue':
        next();
        break;  
      default:
        res.status(400).json({ message: 'Incorrect status' });
        break;
    }
    // this.res.status(400).json({ message: 'Incorrect status' });
  } catch (e) {
    console.log(e);
  }
};

module.exports = validateStatus;
