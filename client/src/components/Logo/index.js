import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './logo.css';
import { Navbar,Row, Container, Col} from 'react-bootstrap';

function Logo() {

  return (
    <>
      <Navbar fixed="top" className="justify-content-center" >
          <Navbar.Brand href="#home">
            <Container className="justify-content-center">
              <Row>
                <Col xs>
                  <Link to ='/'>
                  <img
                    src="/assets/WePooLogo.png"
                    width=""
                    height=""
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

export default Logo;