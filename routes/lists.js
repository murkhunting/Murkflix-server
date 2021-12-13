const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new req.body();
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

//DELETE

//GET
module.exports = router;
