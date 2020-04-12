const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const flash = require('connect-flash');

const routes = require('./routes');
const middlewares = require('./middlewares');

require('dotenv').config();
require('./configs').PASSPORT(passport);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT;

app.use('/', routes.LOGIN);
app.use('/dashboard', middlewares.AUTH, routes.DASHBOARD);
app.use('/customer', middlewares.AUTH, routes.CUSTOMER);
app.use('/room', middlewares.AUTH, routes.ROOM);
app.use('/control', middlewares.AUTH, routes.CONTROL);

app.use(function(_, res){
    res.status(404).render('404.pug');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.info(`> Ready on ${PORT}`);
});
