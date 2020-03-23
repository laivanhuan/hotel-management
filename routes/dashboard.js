const express = require('express');
const router = express.Router();
const controller = require('../controller').DASHBOARD;

router.get('/', controller.getDashboard);

module.exports = router;