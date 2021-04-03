import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./butts.css";
// import './Navbar.css';
import { Row, Container, Col } from "react-bootstrap";
// import { styles } from "react-bootstrap";

class HomeButton extends Component {
  render() {
    return (
      <>
        <div class="btn-group-vertical">
          <div class="butts vertical-center">
            <Col>
              <Button variant="warning" size="lg" onClick={() => "/map"}>
                GOTTA GO
              </Button>
            </Col>

            <Col>
              <Button variant="warning" size="lg" onClick={() => "/player"}>
                GOING
              </Button>
            </Col>

            <Col>
              <Button variant="warning" size="lg" onClick={() => "/review"}>
                GONE
              </Button>
            </Col>
          </div>
        </div>
      </>
    );
  }
}

export default HomeButton;
