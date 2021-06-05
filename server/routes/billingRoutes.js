const keys = require("../config/key");
const stripe = require("stripe")(keys.stripeSecret);
const requestLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requestLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "$5 for 5 email",
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
