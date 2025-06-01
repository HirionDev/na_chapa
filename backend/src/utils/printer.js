// frontend/src/utils/print.js
export function imprimirPedido(pedido) {
  if (window.require) {
    const { ipcRenderer } = window.require('electron');
    ipcRenderer.send('imprimir-pedido', pedido);
  } else {
    alert("A simulação de impressão só está disponível no Electron.");
  }
}
