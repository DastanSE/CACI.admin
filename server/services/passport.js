const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('login',
  new LocalStrategy((username, password, done) => {
    User.getUserByUsername(username, (err, user) => {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }

      User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);
