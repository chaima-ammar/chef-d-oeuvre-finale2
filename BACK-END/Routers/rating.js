 const express = require("express");
const ratingControllers = require("../Controllers/rating");
const router = express.Router();

router.get("/getRating", ratingControllers.getRating);
router.post("/postRating", ratingControllers.postRating);

module.exports = router;
