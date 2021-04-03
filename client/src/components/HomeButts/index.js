import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./butts.css";
// import './Navbar.css';
import { Row, Container, Col, Span, ButtonGroup } from "react-bootstrap";
// import { styles } from "react-bootstrap";

class HomeButton extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <div class="btn-group btn-group-sm" vertical >
          <div class="butts vertical-center">
            <div class="col-md-4">
              <Button variant="warning"  onClick={() => "/map"}>
                GOTTA GO
              </Button>
            </div>

            <Col class="col-md-4">
              <Button variant="warning" size="lg" onClick={() => "/player"}>
                GOING
              </Button>
            </Col>

            <Col class="buttCol">
              <Button variant="warning" size="lg" onClick={() => "/review"}>
                GONE
              </Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeButton;
