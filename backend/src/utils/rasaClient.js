const axios = require('axios');

exports.sendToRasa = async (mensagem, remetente) => {
  const resp = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
    sender: remetente, // Use um ID único por cliente (telefone, por exemplo)
    message: mensagem
  });
  return resp.data.map(r => r.text).join('\n');
};
