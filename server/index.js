const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cloudinary = require('cloudinary');
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");
mongoose.connect(keys.mongoURI, { useMongoClient: true });
const app = express();
const User = mongoose.model("users");


cloudinary.config({
  cloud_name: 'cacicloud',
  api_key: keys.cloudinaryApiKey,
  api_secret: keys.cloudinaryApiSecretKey
});

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);
require("./routes/event")(app);
require("./routes/jobs")(app);
require("./routes/news")(app);
require("./routes/repertoire")(app);
require("./routes/article")(app);


if (process.env.NODE_ENV === "production") {
  // express will serve up production assets
  // Like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up index.html file
  // if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.ADMIN_PORT || 5000;

app.listen(PORT);
