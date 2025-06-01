const express = require('express');
const router = express.Router();
const { sendToRasa } = require('../utils/rasaClient');
const auth = require('../middlewares/authMiddleware');

router.post('/mensagem', auth, async (req, res) => {
  const { mensagem, remetente } = req.body;
  try {
    const resposta = await sendToRasa(mensagem, remetente || "frontend");
    res.json({ resposta });
  } catch (err) {
    res.status(500).json({ erro: 'Erro RASA', detalhe: err.message });
  }
});

module.exports = router;
