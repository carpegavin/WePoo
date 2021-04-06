import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./butts.css";
import { Row, Container, Col, Span, ButtonGroup } from "react-bootstrap";
// import { styles } from "react-bootstrap";
// import ""{ useHistory } from 'react-router-dom';
// import { props } from "react";
// const history = useHistory();

class HomeButton extends Component {
  render() {
    return (
      <div className="container" id="linkStyle" style={{ textAlign: "center" }}>
        <div className="btn-group btn-group-sm" vertical="true">
          <div className="butts vertical-center">

            <Col style={{ height: "9.5rem" }}>
              <Link className="individualLink" to="/map">
                <p class="text">GOTTA GO</p>
              </Link>
            </Col>

            <Col style={{ height: "9.5rem" }}>
              <Link className="individualLink" to="/player">
                <p class="text">GOING</p>
              </Link>
            </Col>

            

          </div>
        </div>
      </div>
    );
  }
}

export default HomeButton;



//             <Col>
//               <Link className="individualLink" to="/review">
//                 <p class="text">GONE</p>
//               </Link>
//             </Col>
