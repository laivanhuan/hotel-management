const LocalStrategy = require("passport-local").Strategy;

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
        if(username !== 'admin') return done(null, false, req.flash("loginMessage", "Oops! Wrong email or password."));
        if(password !== '123456789') return done(null, false, req.flash("loginMessage", "Oops! Wrong password."));
        
        return done(null, {username, password});
      }
    )
  );
};
