const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.criarPedido = async (req, res) => {
  const { cliente, canal, itens, pagamento, observacoes } = req.body;
  const pedido = await prisma.pedido.create({
    data: {
      cliente,
      canal,
      status: 'preparacao',
      itens,
      pagamento,
      observacoes,
    },
  });
  res.status(201).json(pedido);
};

exports.atualizarStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const pedido = await prisma.pedido.update({
    where: { id: Number(id) },
    data: { status },
  });
  res.json(pedido);
};

exports.listarPedidos = async (req, res) => {
  const pedidos = await prisma.pedido.findMany({
    orderBy: { criadoEm: 'desc' },
  });
  res.json(pedidos);
};
