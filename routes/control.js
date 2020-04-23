const express = require('express');
const router = express.Router();
const controller = require('../controller').CONTROL;

router.get('/', controller.getControlPage);
router.get('/room', controller.getRoomPage);
router.get('/checkin', controller.getCheckinPage);
router.get('/checkin/:id', controller.getCheckinPage);
router.get('/checkout/:id', controller.getCheckoutPage);

router.post('/checkin', controller.createABooking);
router.post('/checkout/:id', controller.checkoutBooking);
router.post('/room', controller.createRoom);

module.exports = router;