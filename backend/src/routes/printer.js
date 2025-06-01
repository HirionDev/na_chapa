const ThermalPrinter = require('node-thermal-printer').printer;
const PrinterTypes = require('node-thermal-printer').types;

exports.imprimirPedido = async (dados) => {
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: 'usb'
  });

  printer.alignCenter();
  printer.println("PEDIDO NA CHAPA");
  printer.println("-----------------------");
  printer.println(`Cliente: ${dados.cliente}`);
  printer.println(`Itens:`);
  dados.itens.forEach(i => printer.println(`- ${i.nome} x${i.qtd}`));
  printer.cut();
  try {
    let res = await printer.execute();
    return res;
  } catch (err) {
    throw err;
  }
};
