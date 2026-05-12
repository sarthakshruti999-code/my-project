const express = require("express");
const router = express.Router();

const { isLoggedIn, isOwner } = require("../middleware");
const { listingschema } = require("../schema");
const listingController = require("../controllers/listing");

// Custom error class
class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// Async wrapper
const asyncWrap = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

// Server-side validation middleware 
const validateListing = (req, res, next) => {
  const { error } = listingschema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    req.flash("error", msg);
    // Redirect back to form (new or edit)
    const referer = req.get("Referer") || "/listings/new";
    return res.redirect(referer);
  }
  next();
};

// INDEX
router.get("/", asyncWrap(listingController.index));

// NEW
router.get("/new", isLoggedIn, listingController.renderNewForm);

// CREATE
router.post("/", isLoggedIn, validateListing, asyncWrap(listingController.createListing));

// SHOW
router.get("/:id", asyncWrap(listingController.showListing));

// EDIT
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingController.renderEditForm));

// UPDATE
router.put("/:id", isLoggedIn, isOwner, validateListing, asyncWrap(listingController.updateListing));

// DELETE
router.delete("/:id", isLoggedIn, isOwner, asyncWrap(listingController.deleteListing));

module.exports = router;
