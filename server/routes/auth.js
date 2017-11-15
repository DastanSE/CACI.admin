const passport = require("passport");
const User = require("../models/User");
const keys = require("../config/keys");

module.exports = app => {
  app.post(
    "/api/signin/",
    passport.authenticate("local", { failureRedirect: "/" }),
    (req, res) => {
      res.send(req.user);
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
        res.redirect("/");
      });
    } else {
      res.send({ error: "Admin password is wrong" });
    }
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
