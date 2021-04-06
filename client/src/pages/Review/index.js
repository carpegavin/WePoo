import React, { useState, useEffect, useRef } from "react";
import {useParams} from "react-router-dom"
import API from "../../utils/API";
// import { List, ListItem } from "../components/List";
import { Navbar, Row, Container, Col, Form, Button } from "react-bootstrap";
import "./Review.css";

function Review() {

  let { id } = useParams();

  // Setting our component's initial state
  const [reviews, setReviews] = useState([]);
  const locationRef = useRef();
  const reviewRef = useRef();
  const ratingRef = useRef();
  const publicRef = useRef();
  const femHyRef = useRef();
  const singleAccRef = useRef();
  const handiRef = useRef();
  const changingTblRef = useRef();

  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadReviews();
  }, []);

  // Loads all books and sets them to books
  function loadReviews() {
    API.getReview(id)
      .then(res => 
        setReviews(res.data.review)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteReview(id) {
    API.deleteReview(id)
      .then((res) => loadReviews())
      .catch((err) => console.log(err));
  }

  // function refHandle() {
  //   if (femHyRef.current.value === "on"){
  //     femHyRef.current.value = true
  //   }
  //   else {
  //     femHyRef.current.value = false
  //   }



  //   if (publicRef.current.value === "on"){
  //     publicRef.current.value = true
  //  }
  //  else {
  //   publicRef.current.value = false
  //  }



  //  if (singleAccRef.current.value === "on"){
  //   singleAccRef.current.value = true }
  //   else {
  //     singleAccRef.current.value = false
  //   }


  //   if (changingTblRef.current.value === "on"){
  //     changingTblRef.current.value = true
  //   }
  //   else {
  //     changingTblRef.current.value = false
  //   }


  //   if (handiRef.current.value === "on"){
  //     handiRef.current.value = true
  //   }
  //   else {
  //     handiRef.current.value = false
  //   }
  //     }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (locationRef.current.value && ratingRef.current.value) {
      API.saveReview({
        id: id,
        locationName: locationRef.current.value,
        lat: id.split("wepoo")[0],
        lon: id.split("wepoo")[1],
        review: [{
          reviewText:reviewRef.current.value,
          rating: ratingRef.current.value,
          handicapAccess: handiRef.current.checked,
          babyChangingTable: changingTblRef.current.checked,
          public: publicRef.current.checked,
          singlePersonBath: singleAccRef.current.checked,
          feminineHygieneProducts: femHyRef.current.checked,
          reviewCreated: new Date()

        }] 
        ,

      })
        .then( () => {
          locationRef.current.value = "";
          reviewRef.current.value = "";
          ratingRef.current.value = 1 ;
          handiRef.current.checked =  false;
          changingTblRef.current.checked = false;
          publicRef.current.checked = false;
          singleAccRef.current.checked = false;
          femHyRef.current.checked = false;
 }

        )
        .then(res => loadReviews())
        .catch(err => console.log(err));
    }
  }

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
                type="switch"
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
            onClick = {handleFormSubmit}
          >Save Review
          </button>
        </Form.Group>
      </Form>
    </Row>
  </Container>
    
    );
  }

  
  


export default Review;
