const express = require("express");
const router = express.Router();
require("dotenv").config();
const {
  Send
} = require("../controller/user");


router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/ilorin", async (req, res) => {
  res.render("fpm-ilorin");
});
router.get("/join-service", (req, res) => {
  res.redirect("https://us05web.zoom.us/j/84087359205?pwd=0dmvED");
});


// this are the routes for the other branches

router.get("/lagos", (req, res) => {
  res.render("fpm-lagos");
});

router.get("/abuja", (req, res) => {
  res.render("fpm-abuja");
});

router.get("/uk", (req, res) => {
  res.render("fpm-uk");
});

router.get("/america", (req, res) => {
  res.render("fpm-america");
});

router.get("/giving", (req, res) => {
  res.render("giving");
});




router.get("/about", async (req, res) => {
  res.render("about");
});

router.get("/contact", async (req, res) => {
  res.render("contact");
});

router.get("/events", async (req, res) => {
  res.render("events");
});

router.get("/testimonies", async (req, res) => {
  res.render("testimonies");
});

router.get("/sop", async (req, res) => {
  res.render("sop");
});
router.get("/confessions", async (req, res) => {
  res.render("confessions");
});

// router.get("/pricing", async (req, res) => {
//   res.render("pricing");
// });

// router.get("/project", async (req, res) => {
//   res.render("project");
// });

// router.get("/service", async (req, res) => {
//   res.render("service");
// });

// router.get("/refund-policy", async (req, res) => {
//   res.render("refundpolicy");
// });

// router.get("/support-policy", async (req, res) => {
//   res.render("supportpolicy");
// });

// router.get("/terms-and-conditions", async (req, res) => {
//   res.render("terms");
// });

// router.get("/privacy-policy", async (req, res) => {
//   res.render("privacy");
// });

router.post('/api/send', Send)


module.exports = router;
