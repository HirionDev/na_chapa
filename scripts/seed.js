const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
  const data = JSON.parse(fs.readFileSync(__dirname + '/../data/seeds/categorias-itens.json', 'utf-8'));
  for (const cat of data) {
    const categoria = await prisma.categoria.create({
      data: {
        nome: cat.categoria,
        ordem: cat.ordem,
        itens: { create: cat.itens }
      }
    });
    console.log('Categoria criada:', categoria.nome);
  }
  process.exit();
}

main();
