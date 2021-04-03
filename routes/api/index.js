const router = require("express").Router();
const reviewRoutes = require("./reviews");

router.use("/review", reviewRoutes);

module.exports = router;
