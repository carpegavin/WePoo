const router = require("express").Router();
const reviewsController = require("../../controllers/reviewController");

// Matches with "/api/review"
router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

// Matches with "/api/review/:id"
router
  .route("/:id")
  .get(reviewsController.find)
  .put(reviewsController.update)
  .delete(reviewsController.remove);

module.exports = router;
