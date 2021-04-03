import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./butts.css";
// import './Navbar.css';
import { Row, Container, Col } from "react-bootstrap";

class HomeButton extends Component {
  render() {
    return (
      <>
      <div class="all">
        <div class="container w-100 h-100">
          <div class="row align-items-center h-100">
            <div class="col-md-6">
              <Button variant="warning" size="lg" onClick={() => "./map"}>
                GOTTA GO
              </Button>
            </div>

            <div class="two">
              <Button variant="warning" size="lg" onClick={() => "/player"}>
                GOING
              </Button>
            </div>

            <div class="three">
              <Button
                fixed="center"
                variant="warning"
                size="lg"
                onClick={() => "/review"}
              >
                GONE
              </Button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default HomeButton;
