const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const cloudinary = require('cloudinary');
const keys = require("./config/keys");

require("./models/User");
mongoose.connect(keys.mongoURI);
const app = express();
const User = mongoose.model("users");

cloudinary.config({
  cloud_name: 'dastan1994',
  api_key: keys.cloudinaryApiKey,
  api_secret: keys.cloudinaryApiSecretKey
});

cloudinary.uploader.upload("my_picture.jpg", function(result) {
  console.log(result)
});




app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);


app.get("/test", (req, res) => {
    res.send(req.user);
  });


  // app.post('/login', passport.authenticate('local-login', {
  //       successRedirect : '/profile', // redirect to the secure profile section
  //       failureRedirect : '/login', // redirect back to the signup page if there is an error
  //       failureFlash : true // allow flash messages
  //   }));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
