const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');

router.get('/vendas', auth, admin, relatorioController.relatorioVendas);

module.exports = router;
