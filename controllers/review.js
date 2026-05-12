const Listing = require("../models/listing");
const Review = require("../models/review");

// CREATE REVIEW
module.exports.createReview = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    const newReview = new Review(req.body.review);

    //  attach author
    newReview.author = req.user._id;

    await newReview.save();

    listing.reviews.push(newReview._id);
    await listing.save();

    req.flash("success", "Review added!");
    res.redirect(`/listings/${id}`);
};

// DELETE REVIEW
module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;

    // remove review reference from listing
    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });

    // delete review
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
};