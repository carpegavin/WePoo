import React from "react";
import { Navbar,Row, Container, Col, Form, Button} from 'react-bootstrap';
// This file exports the Input, TextArea, and FormBtn components
import './style.css';
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}



function ReviewForm(){
  return (
    <>
    <Container className="justify-content-center">
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Additional Info</Form.Label>
          <Form.Row>
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
                label="Single Access"
              />
            </Col>
          </Form.Row>
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
           <Col>
              <Form.Check 
                type="switch"
                id="CT-switch"
                label="Changing Table"
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us how it went</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </Container>
    </>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export default ReviewForm;