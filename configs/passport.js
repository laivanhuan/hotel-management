const LocalStrategy = require("passport-local").Strategy;
const User = require('../models').user;
module.exports = function(passport) {
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  // used to deserialize the user
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, done) {
        User.findOne({
          where: {
            username
          }
        }).then(user => {
          if(user){
            if(password === user.password){
              return done(null, user);
            }else{
              return done(null, false, req.flash("loginMessage", "Oops! Wrong password."));
            }
          }
          return done(null, false, req.flash("loginMessage", "Oops! Wrong email or password."));
        });
      }
    )
  );
};
