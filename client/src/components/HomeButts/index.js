import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./butts.css";
import { props } from "react";
// import './Navbar.css';
import { Row, Container, Col, Span, ButtonGroup } from "react-bootstrap";
// import { styles } from "react-bootstrap";
// import ""{ useHistory } from 'react-router-dom';

// const history = useHistory();

class HomeButton extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <div class="btn-group btn-group-sm" vertical>
          <div class="butts vertical-center">

            <Col style={{ height: "9.5rem" }}>
              <Button onClick={()=> 
                this.props.history.push('/map')}>GOTTA GO</Button>
            </Col>

            <Col style={{ height: "9.5rem" }}>
              <Button onClick={() => "/player"}>GOING</Button>
            </Col>

            <Col style={{ height: "9.5rem" }}>
              <Button onClick={() => "/review"}>GONE</Button>
            </Col>

          </div>
        </div>
      </div>
    );
  }
}

export default HomeButton;
