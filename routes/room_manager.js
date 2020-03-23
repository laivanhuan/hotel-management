const express = require('express');
const router = express.Router();
const controller = require('../controller').ROOM;

router.get('/', controller.getRoomPage);

module.exports = router;