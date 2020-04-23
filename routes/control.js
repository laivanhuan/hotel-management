const express = require('express');
const router = express.Router();
const controller = require('../controller').CONTROL;

router.get('/', controller.getControlPage);
router.get('/checkin', controller.getCheckinPage);
router.get('/checkout', controller.getCheckoutPage);
router.get('/room', controller.getRoomPage);

module.exports = router;