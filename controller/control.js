module.exports.getControlPage= (_, res) => {
    res.render('control');
}

module.exports.getCheckinPage= (_, res) => {
    res.render('checkin');
}

module.exports.getCheckoutPage= (_, res) => {
    res.render('checkout');
}

module.exports.getRoomPage= (_, res) => {
    res.render('room');
}