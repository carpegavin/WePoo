const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  location: {
     type: { type: String },
      coordinates: [Number],
      required: "Location is required"
},
  
  rating: {
      type: Number,
      validate: [({ rating }) => rating <= 5, "Rating 1-5"],
      required: "Rating is required"
},

  handicapAccess: {
    type: Boolean
},
  
  babyChangingTable: {
    type: Boolean
},

  public: {
    type: Boolean
},

  singlePersonBath: {
    type: Boolean
},

  feminineHygieneProducts: {
    type: Boolean
},

  reviewCreated: {
    type: Date,
    default: Date.now
}
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
