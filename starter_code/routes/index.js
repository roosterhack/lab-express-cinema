const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Get movies page
router.get("/movies", (req, res, next) => {
  Movies.find({}, (err, docs) => {
    res.render("movie-list", { docs });
  }).limit(8);
});

//Get movie detail page
router.get("/movie/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movies.find({ title: movieId }, (err, doc) => {
    res.render("movie-details", { doc });
  });
});

module.exports = router;
