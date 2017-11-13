const passport = require("passport");

module.exports = app => {
  app.post(
    "/api/login",
    passport.authenticate('local', {successRedirect: '/admin', failureRedirect: '/test', failureFlash: false}),
    (req, res) => {
      res.redirect('/admin')
    }
  );


  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });


};
