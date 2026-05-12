require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const listingsrouter = require("./routes/listing");
const reviewRoutes = require("./routes/review");
const userRoutes = require("./routes/user");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// DATABASE URL
const dbUrl = process.env.ATLASDB_URL;

// CONNECT DATABASE
async function main() {
  await mongoose.connect(dbUrl);
  console.log("✅ Connected to DB");
}

main().catch((err) => console.log(err));

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// MIDDLEWARE
app.set("trust proxy", 1); // trust Render's proxy
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// SESSION STORE
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

// STORE ERROR
store.on("error", (err) => {
  console.log("Session Store Error:", err);
});

// SESSION CONFIG
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

app.use(session(sessionOptions));

// FLASH
app.use(flash());

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// GLOBAL LOCALS
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// ROUTES
app.use("/listings", listingsrouter);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/users", userRoutes);

// HOME ROUTE
app.get("/", (req, res) => {
  return res.redirect("/listings");
});

// 404 HANDLER
app.use((req, res) => {
  return res.status(404).render("listings/error", {
    statusCode: 404,
    message: "Page not found!",
  });
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const { statusCode = 500, message = "Something went wrong!" } = err;

  return res.status(statusCode).render("listings/error", {
    statusCode,
    message,
  });
});

// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
