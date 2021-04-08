import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar,Row, Container, Col} from 'react-bootstrap';

function BottomNavbar() {

  return (
    <>
      <Navbar fixed="bottom" className="justify-content-center" >
          <Navbar.Brand href="#home">
            <Container className="justify-content-space-between">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Link to ='/'>
                  <img
                    src="/assets/home.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    marginLeft=".5%"
                    alt=""
                  />
                  </Link>
                </Col>
                <Col>
                </Col>
                <Col xs="auto">
                  <Link to ='/map'>
                  <img
                    src="/assets/maps.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  </Link>
                </Col>
                <Col>
                </Col>
                <Col xs="auto">
                  <Link to ='/player'>
                  <img
                    src="/assets/review.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  </Link>
                </Col>
              </Row>
            </Container>
          </Navbar.Brand>
        </Navbar>
    </>
  );
}

export default BottomNavbar;