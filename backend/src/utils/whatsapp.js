const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  console.log('QR RECEBIDO PARA AUTENTICAR:', qr);
});

client.on('ready', () => {
  console.log('WhatsApp conectado!');
});

client.on('message', async msg => {
  if (msg.body.toLowerCase().includes('cardápio')) {
    msg.reply('Confira nosso cardápio: ...');
  }
});

client.initialize();

module.exports = client;
