module.exports.getLogin = (_, res) => {
    res.render('login');
}

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}