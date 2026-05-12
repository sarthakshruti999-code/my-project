const Listing = require("../models/listing");

// INDEX
module.exports.index = async (req, res) => {
  const { search } = req.query;
  let allListings;

  if (search && search.trim() !== "") {
    allListings = await Listing.find({
      $or: [
        { location: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } }
      ]
    });
  } else {
    allListings = await Listing.find({});
  }

  return res.render("listings/index", { allListings, search });
};

// NEW
module.exports.renderNewForm = (req, res) => {
  return res.render("listings/new");
};

// CREATE
module.exports.createListing = async (req, res) => {
  const listingData = req.body.listing;

  // Convert plain image URL string → { url, filename } object
  if (listingData.image && typeof listingData.image === "string" && listingData.image.trim() !== "") {
    listingData.image = { url: listingData.image.trim(), filename: "user_provided" };
  } else {
    listingData.image = {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
      filename: "default"
    };
  }

  const newListing = new Listing(listingData);
  newListing.owner = req.user._id;

  await newListing.save();

  req.flash("success", "Listing created successfully!");
  res.redirect("/listings");
};

// SHOW
module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const avgRating = listing.reviews.length
    ? listing.reviews.reduce((acc, r) => acc + r.rating, 0) / listing.reviews.length
    : 0;

  return res.render("listings/show", { listing, avgRating });
};

// EDIT
module.exports.renderEditForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  return res.render("listings/edit", { listing });
};

// UPDATE
module.exports.updateListing = async (req, res) => {
  const listingData = req.body.listing;

  
  if (listingData.image && typeof listingData.image === "string" && listingData.image.trim() !== "") {
    listingData.image = { url: listingData.image.trim(), filename: "user_provided" };
  }
 
  if (!listingData.image || listingData.image === "") {
    delete listingData.image;
  }

  await Listing.findByIdAndUpdate(req.params.id, listingData);

  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${req.params.id}`);
};

// DELETE
module.exports.deleteListing = async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);

  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
