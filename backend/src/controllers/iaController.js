const { processMessage } = require('../utils/iaEngine');

exports.processIA = async (req, res) => {
  const { mensagem, contexto } = req.body;
  try {
    const resposta = await processMessage(mensagem, contexto);
    res.json({ resposta });
  } catch (err) {
    res.status(500).json({ erro: 'Erro IA', detalhe: err.message });
  }
};
