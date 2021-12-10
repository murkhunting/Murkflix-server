const router = require("express").Router();
const User = require("../models/User");

//SIGN UP
router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
