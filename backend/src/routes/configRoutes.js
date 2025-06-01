const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');

router.get('/', auth, admin, configController.getConfig);
router.put('/', auth, admin, configController.updateConfig);

module.exports = router;
