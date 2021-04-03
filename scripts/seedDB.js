const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wepoo"
);

const bookSeed = [
  {
    id: "30.2672-97.7431",
    locationName: "My House",
    lat: 30.2672 ,
    lon: -97.7431,
    review:[{
      rating: 5 ,
      handicapAccess: true,
      babyChangingTable: true,
      public: true,
      singlePersonBath: true,
      feminieHygieneProducts: true
    }]
  }
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
