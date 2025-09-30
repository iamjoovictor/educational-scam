const express = require('express');
const router = express.Router();
const LogController = require('../controllers/logController');

router.post('/logs', LogController.createLog);
router.get('/logs', LogController.getLogs);

module.exports = router;