import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./butts.css";
// import './Navbar.css';
import { Row, Container, Col, Span, ButtonGroup,  } from "react-bootstrap";
// import { styles } from "react-bootstrap";

class HomeButton extends Component {
  render() {
    return (
      <div className = "container" style={{textAlign:"center"}}>
        <ButtonGroup vertical >
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
        </ButtonGroup>
      </div>
    );
  }
}

export default HomeButton;
