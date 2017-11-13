const passport = require("passport");
const User = require("../models/User");
const keys = require("../config/keys");

module.exports = app => {
  app.post(
    "/register/api/login",
    passport.authenticate("local", {
      successRedirect: "/admin",
      failureRedirect: "/",
      failureFlash: false
    }),
    (req, res) => {
      console.log('logged in', req.body);
      res.redirect("/admin");
    }
  );

  app.post("/register/api/signup", (req, res) => {
    if (req.body.adminPassword === keys.adminPassword) {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      User.createUser(newUser, (err, user) => {
        if (err) throw err;
        console.log("created user", user);
        res.redirect("/");
      });
    } else {
      res.send({ error: "Admin password is wrong" });
    }
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
