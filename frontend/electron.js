const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createMainWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  win.loadURL('http://localhost:5173');

  // Exemplo: Simulação de impressão (via IPC do Electron)
  ipcMain.on('imprimir-pedido', (event, printData) => {
    createPrintWindow(printData);
  });
}

function createPrintWindow(printData) {
  const win = new BrowserWindow({
    width: 420,
    height: 600,
    show: true,
    title: 'Impressão do Pedido',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile(path.join(__dirname, 'public', 'print.html'));

  win.webContents.on('did-finish-load', () => {
    win.webContents.send('print-data', printData);
  });
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
