const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await prisma.usuario.findUnique({ where: { email } });

  if (!user) return res.status(401).json({ mensagem: 'Usuário não encontrado.' });
  if (!user.ativo) return res.status(401).json({ mensagem: 'Usuário bloqueado.' });

  const senhaOk = await bcrypt.compare(senha, user.senha);
  if (!senhaOk) return res.status(401).json({ mensagem: 'Senha inválida.' });

  const token = jwt.sign(
    { id: user.id, admin: user.admin, nome: user.nome, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );
  res.json({ token, usuario: { id: user.id, nome: user.nome, admin: user.admin } });
};

exports.registrarAdmin = async (req, res) => {
  const { nome, email, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  try {
    const user = await prisma.usuario.create({
      data: { nome, email, senha: hash, admin: true },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
};
