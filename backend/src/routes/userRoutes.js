const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');

router.get('/', auth, admin, userController.getUsuarios);
router.put('/bloquear/:id', auth, admin, userController.bloquearUsuario);

module.exports = router;
