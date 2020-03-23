const express = require('express');
const router = express.Router();
const controller = require('../controller').CONTROL;

router.get('/', controller.getControlPage);

module.exports = router;