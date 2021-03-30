import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Review.css"

function Review() {
  // Setting our component's initial state
  const [reviews, setReviews] = useState([])

  const [formObject, setFormObject] = useState({})



  // Load all books and store them with setBooks
  useEffect(() => {
    loadReviews()
  }, [])

  // Loads all books and sets them to books
  function loadReviews() {
    API.getReviews()
      .then(res => 
        setReviews(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteReview(id) {
    API.deleteReview(id)
      .then(res => loadReviews())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.location && formObject.rating) {
      API.saveReview({
        location: formObject.location,
        rating: formObject.rating,
        handicapAccess: formObject.handicapAccess,
        babyChangingTable: formObject.babyChangingTable,
        public: formObject.public,
        singlePersonBath: formObject.singlePersonBath,
        feminineHygieneProducts: formObject.feminineHygieneProducts,
        reviewCreated: formObject.reviewCreated,
      })
        .then(res => loadReviews())
        .catch(err => console.log(err));
    }
  };

  // Need to find out how to pull lat and lon from user
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                onChange={handleInputChange}
                name="rating"
                placeholder="Rating (required) location should be taken from browser"
              />
              <Input
                onChange={handleInputChange}
                name="futurecheckbox"
                placeholder="futurecheckbox for boolean"
              />
              <Input
                onChange={handleInputChange}
                name="futurecheckbox2"
                placeholder="futurecheckbox2 for boolean(required)"
              />
              <FormBtn
                disabled={!(formObject.location && formObject.rating)}
                onClick={handleFormSubmit}
              >
                Submit Review
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }


export default Review;
