const axios = require('axios');

exports.processMessage = async (mensagem, contexto = {}) => {
  try {
    // Exemplo: Se tiver Ollama rodando, faz request local. Senão, usa regras simples.
    // const resp = await axios.post('http://localhost:11434/api/generate', {
    //   model: "llama3",
    //   prompt: mensagem,
    //   stream: false
    // });
    // return resp.data.response || "Resposta IA não encontrada";
    if (mensagem.toLowerCase().includes('hamburguer')) {
      return 'Temos Hambúrguer Artesanal! Promoção hoje!';
    }
    if (mensagem.toLowerCase().includes('horário')) {
      return 'Funcionamos das 18h às 23h!';
    }
    return 'Desculpe, não entendi sua mensagem. Posso ajudar com o cardápio?';
  } catch (err) {
    return 'Erro ao processar IA.';
  }
};
