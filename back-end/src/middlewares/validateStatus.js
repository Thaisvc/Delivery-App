const statusTypes = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

function validateStatus(req, res, next) {
  try {
    const { status } = req.body;

    if (statusTypes.includes(status)) {
      return next();
    }
    res.status(400).json({ message: 'Incorrect status' });
    } catch (e) {
    console.log(e);
  }
}

module.exports = validateStatus;
