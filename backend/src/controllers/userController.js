const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

exports.getUsuarios = async (req, res) => {
  const usuarios = await prisma.usuario.findMany({
    select: { id: true, nome: true, email: true, admin: true, ativo: true, criadoEm: true }
  });
  res.json(usuarios);
};

exports.bloquearUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.update({
    where: { id: Number(id) },
    data: { ativo: false },
  });
  res.json(usuario);
};
