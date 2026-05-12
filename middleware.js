const Listing = require("./models/listing");
const Review = require("./models/review");
module.exports.isLoggedIn = (req, res, next) => 
    { if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first!"); 
        return res.redirect("/users/login"); } 
    next();
    return;
 };

 module.exports.saveredirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
    return;
 }
 module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    // check if listing exists
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    // check if owner exists
    if (!listing.owner) {
        req.flash("error", "This listing has no owner!");
        return res.redirect(`/listings/${id}`);
    }

    //  main check
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You are not the owner!");
        return res.redirect(`/listings/${id}`);
    }

    next();
    return;
};
module.exports.isReviewAuthor = async (req, res, next) => {
    const { reviewId, id } = req.params;

    const review = await Review.findById(reviewId);

    // check review exists
    if (!review) {
        req.flash("error", "Review not found!");
        return res.redirect(`/listings/${id}`);
    }

    // check author exists + matches
    if (!review.author || !review.author.equals(req.user._id)) {
        req.flash("error", "You are not the review author!");
        return res.redirect(`/listings/${id}`);
    }

    return next();
};