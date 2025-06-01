const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getConfig = async (req, res) => {
  const config = await prisma.configuracao.findFirst();
  res.json(config);
};

exports.updateConfig = async (req, res) => {
  const data = req.body;
  const config = await prisma.configuracao.update({
    where: { id: 1 },
    data
  });
  res.json(config);
};
