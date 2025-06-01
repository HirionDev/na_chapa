const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

async function imprimirPedidoFisico(pedido) {
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: 'usb', // ou 'tcp://IP:9100' conforme sua impressora
  });

  printer.alignCenter();
  printer.println("Pedido Na Chapa");
  printer.drawLine();

  printer.println(`Cliente: ${pedido.cliente || '-'}`);
  printer.println(`Telefone: ${pedido.telefone || '-'}`);
  printer.println(`Consumo: ${pedido.tipo_consumo || '-'}`);
  printer.drawLine();

  pedido.itens.forEach(item => {
    printer.println(`${item.quantidade}x ${item.nome} - ${item.observacao || ''}`);
  });
  printer.drawLine();
  printer.println(`Total: R$ ${pedido.valor_total.toFixed(2)}`);
  printer.println(`Pagamento: ${pedido.pagamento || '-'}`);
  if (pedido.comprovante) printer.println("Comprovante: Sim");
  printer.drawLine();

  try {
    let execute = await printer.execute();
    return execute;
  } catch (err) {
    console.error("Erro ao imprimir:", err);
    throw err;
  }
}

module.exports = { imprimirPedidoFisico };
