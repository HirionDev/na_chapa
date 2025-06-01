const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');

router.get('/', menuController.getCardapio);
router.post('/categoria', auth, admin, menuController.criarCategoria);
router.post('/item', auth, admin, menuController.criarItem);

module.exports = router;
