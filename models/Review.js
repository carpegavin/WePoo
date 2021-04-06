const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({

id: {
  type: String,
  required: "Must have an ID"
},

locationName: {
  type: String,
  require: "Must have a location name"
},

lat: {
     type:  Number ,
},

lon: {
  type: Number ,
},

review: [{
  rating: {
      type: Number,
      validate: [({ rating }) => rating <= 5, "Rating 1-5"],
  },

reviewText : {
      type: String,

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
}]
  

});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
