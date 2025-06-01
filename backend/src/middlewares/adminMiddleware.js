module.exports = function (req, res, next) {
  if (!req.user || !req.user.admin) {
    return res.status(403).json({ mensagem: 'Permissão de administrador requerida.' });
  }
  next();
};
