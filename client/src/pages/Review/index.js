import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import { List, ListItem } from "../components/List";
import { Navbar,Row, Container, Col, Form, Button} from 'react-bootstrap';
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
    API.getReview()
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
  <Container className="justify-content-center">
    <Row className="all" style={{ textAlign: "center" }} >
      <Form id ="form" className="justify-content-center" >
        <Form.Group controlId="exampleForm.ControlInput1" className="justify-content-center">
          <Form.Label>Location</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group style={{ textAlign: "center" }}controlId="formBasicCheckbox">
         
          <Form.Row style={{textAlign: "left"}}>
            <Col>
              <Form.Check 
                type="switch"
                id="Public-switch"
                label="Public"
            
              />
            </Col>
            <Col>
              <Form.Check 
                type="switch"
                id="SA-switch"
                label="Single"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Check 
                type="switch"
                id="FH-switch"
                label="Feminine Hygene"
              />
            </Col>
            <Col>
              <Form.Check 
                type="switch"
                id="HA-switch"
                label="Handicap Accessible"
              />
           </Col>
           <Col style={{textAlign: "left"}}>
           <br />
              <Form.Check 
                type="switch"
                id="CT-switch"
                label="Baby Table"
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>How'd it go?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Row>
  </Container>
    
    );
  }

  export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }


export default Review;
