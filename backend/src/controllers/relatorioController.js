const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.relatorioVendas = async (req, res) => {
  const { inicio, fim } = req.query;
  const vendas = await prisma.venda.findMany({
    where: {
      criadoEm: {
        gte: new Date(inicio),
        lte: new Date(fim)
      }
    },
    include: { pedido: true },
    orderBy: { criadoEm: 'desc' }
  });
  res.json(vendas);
};
