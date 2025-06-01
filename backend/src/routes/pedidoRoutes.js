const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, pedidoController.listarPedidos);
router.post('/', pedidoController.criarPedido);
router.put('/:id/status', auth, pedidoController.atualizarStatus);

module.exports = router;
