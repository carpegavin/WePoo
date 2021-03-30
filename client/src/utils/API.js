import axios from "axios";

export default {
  // Gets all books
  getReviews: function() {
    return axios.get("/api/review");
  },
  // Gets the book with the given id
  getReviews: function(id) {
    return axios.get("/api/review/" + id);
  },
  // Deletes the book with the given id
  deleteReview: function(id) {
    return axios.delete("/api/review/" + id);
  },
  // Saves a book to the database
  saveReview: function(reviewData) {
    return axios.post("/api/review", reviewData);
  }
};
