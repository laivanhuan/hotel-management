const express = require('express');
const router = express.Router();
const controller = require('../controller').CUSTOMER;

router.get('/', controller.getCustomerPage);

module.exports = router;