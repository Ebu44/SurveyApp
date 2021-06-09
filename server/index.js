const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/key");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Connected");
});
