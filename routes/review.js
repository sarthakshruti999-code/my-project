const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isReviewAuthor } = require("../middleware");

const { reviewschema } = require("../schema");
const reviewController = require("../controllers/review");

// Async wrapper
const asyncWrap = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};


const validateReview = (req, res, next) => {
  const { error } = reviewschema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    req.flash("error", msg);
    return res.redirect(`/listings/${req.params.id}`);
  }
  next();
};

router.post("/", isLoggedIn, validateReview, asyncWrap(reviewController.createReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, asyncWrap(reviewController.deleteReview));

module.exports = router;
