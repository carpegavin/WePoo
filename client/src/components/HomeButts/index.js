import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./butts.css";
// import './Navbar.css';
// import { Row, Container, Col } from "react-bootstrap";
// import { styles } from "react-bootstrap";

class HomeButton extends Component {
  render() {
    return (
      <>
        
            <div class="butts vertical-center">
              <div className="align-baseline" >
                <Button variant="warning" size="lg" onClick={() => "/map"}>
                  GOTTA GO
                </Button>
              </div>
            

              <div className="align-baseline">
                <Button variant="warning" size="lg" onClick={() => "/player"}>
                  GOING
                </Button>
              </div>

              <div className="align-baseline" >
                <Button variant="warning" size="lg" onClick={() => "/review"}>
                  GONE
                </Button>
              </div>
            </div>
          
            
          
      </>
    );
  }
}

export default HomeButton;
