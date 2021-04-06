import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/API";
// import { List, ListItem } from "../components/List";
import { Navbar,Row, Container, Col, Form, Button} from 'react-bootstrap';
import "./Review.css"

function Review() {
  // Setting our component's initial state
  const [reviews, setReviews] = useState([])
  const locationRef = useRef();
  const reviewRef = useRef();
  const ratingRef = useRef();
  const publicRef = useRef();
  const femHyRef = useRef();
  const singleAccRef = useRef();
  const handiRef = useRef();
  const changingTblRef = useRef();
  


  const [formObject, setFormObject] = useState({})



  // Load all books and store them with setBooks
  useEffect(() => {
    loadReviews()
  }, [])

  // Loads all books and sets them to books
  function loadReviews() {
    // API.getReview(req.params.id)
    //   .then(res => 
    //     setReviews(res.data.review)
    //   )
    //   .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteReview(id) {
    API.deleteReview(id)
      .then(res => loadReviews())
      .catch(err => console.log(err));
  }

  function refHandle() {
    if (femHyRef.current.value === "on"){
      femHyRef.current.value = true
    }
    else {
      femHyRef.current.value = false
    }



    if (publicRef.current.value === "on"){
      publicRef.current.value = true
   }
   else {
    publicRef.current.value = false
   }



   if (singleAccRef.current.value === "on"){
    singleAccRef.current.value = true }
    else {
      singleAccRef.current.value = false
    }


    if (changingTblRef.current.value === "on"){
      changingTblRef.current.value = true
    }
    else {
      changingTblRef.current.value = false
    }


    if (handiRef.current.value === "on"){
      handiRef.current.value = true
    }
    else {
      handiRef.current.value = false
    }
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
    if (formObject.locationName && formObject.review.rating) {
      API.saveReview({
        // id: req.params.id,
        locationName: locationRef.current.value,
        lat: 0,
        lon: 0,
        review: [{
          reviewText:reviewRef.current.value,
          rating: ratingRef.current.value,
          handicapAccess: handiRef.current.value,
          babyChangingTable: changingTblRef.current.value,
          public: publicRef.current.value,
          singlePersonBath: singleAccRef.current.value,
          feminineHygieneProducts: femHyRef.current.value,
          reviewCreated: new Date()

        }] 
        ,

      })
        .then( () => {
          reviewRef.current.value = ""
          ratingRef.current.value = 1 
          handiRef.current.value =  "off"
          changingTblRef.current.value = "off"
          publicRef.current.value = "off"
          singleAccRef.current.value = "off"
          femHyRef.current.value = "off" 
 }

        )
        .then(res => loadReviews())
        .catch(err => console.log(err));
    }
  };

  // Need to find out how to pull lat and lon from user
    return (
  <Container className="justify-content-center">
    <Row className="all" style={{ textAlign: "center" }} >
      <Form id ="form" className="justify-content-center" >
        <Form.Group  controlId="exampleForm.ControlInput1" className="justify-content-center">
          <Form.Label>Location</Form.Label>
          <Form.Control ref = {locationRef} type="text" placeholder="Location Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating</Form.Label>
          <Form.Control ref = {ratingRef} as="select">
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
              <Form.Check ref = {publicRef}
                type="checkbox"
                id="Public-switch"
                label="Public"
            
              />
            </Col>
            <Col>
              <Form.Check ref = {singleAccRef}
                type="switch"
                id="SA-switch"
                label="Single"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Check ref = {femHyRef}
                type="switch"
                id="FH-switch"
                label="Feminine Hygene"
              />
            </Col>
            <Col>
              <Form.Check ref = {handiRef}
                type="switch"
                id="HA-switch"
                label="Handicap Accessible"
              />
           </Col>
           <Col style={{textAlign: "left"}}>
           <br />
              <Form.Check ref = {changingTblRef}
                type="switch"
                id="CT-switch"
                label="Baby Table"
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>How'd it go?</Form.Label>
          <Form.Control ref = {reviewRef} as="textarea" rows={3} />
          <button  
          style={{ float: "right", marginBottom: 10 }} 
          className="btn btn-success"
          onClick = {(e)=> {
            e.preventDefault();
            console.log(formObject)

            console.log(publicRef.current.value)
            console.log(ratingRef.current.value)
          }
        }
          >

        
      </button>
        </Form.Group>
      </Form>
    </Row>
  </Container>
    
    );
  }

  
  


export default Review;
