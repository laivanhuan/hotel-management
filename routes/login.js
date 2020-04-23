const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controller').LOGIN;

router.get('/', controller.getLogin);
router.get('/logout', controller.logout);
router.post('/auth', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/', 
    failureFlash: true 
}))

module.exports = router;