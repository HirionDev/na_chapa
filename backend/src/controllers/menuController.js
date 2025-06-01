const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getCardapio = async (req, res) => {
  const categorias = await prisma.categoria.findMany({
    orderBy: { ordem: 'asc' },
    include: { itens: { where: { ativo: true }, orderBy: { ordem: 'asc' } } },
  });
  res.json(categorias);
};

exports.criarCategoria = async (req, res) => {
  const { nome, ordem } = req.body;
  const categoria = await prisma.categoria.create({ data: { nome, ordem } });
  res.status(201).json(categoria);
};

exports.criarItem = async (req, res) => {
  const { nome, descricao, categoriaId, preco, imagem, ingredientes, estoque, ordem } = req.body;
  const item = await prisma.item.create({
    data: { nome, descricao, categoriaId, preco, imagem, ingredientes, estoque, ordem }
  });
  res.status(201).json(item);
};
