const router = require("express").Router();
const reviewRoutes = require("./reviews");

// Book routes
router.use("/review", reviewRoutes);

module.exports = router;
