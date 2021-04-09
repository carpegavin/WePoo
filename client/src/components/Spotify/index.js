import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Row, Container, Col} from 'react-bootstrap';


function Spotify (){
    return(
      <>
      <Container style={{ height: "80%",marginTop: "20%" }}>
        <Row style={{ textAlign: "center", color:"#ffc107"}}>
            <Col xs={10}>
            <div>
            <h4 style={{ fontFamily:'Noto Sans', marginLeft:"17%", }}>Our Staff Picked Songs for When You Need to Go</h4>
            </div>
            </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
            <Col>
             <iframe src="https://open.spotify.com/embed/playlist/3Nmrj1LtDSzGHtdW3xRb6Y" width="140" height="140" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Col>
            <Col>
            <iframe src="https://open.spotify.com/embed/playlist/6fHh4KSt7tzhKj7gBZDLQ8" width="140" height="140" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Col>
           
        </Row>
        <br></br>
       
        <Row style={{ textAlign: "center" }}>
            <Col>
            <iframe src="https://open.spotify.com/embed/playlist/4wRmfPoD9bvkpFPPv6Kts4" width="140" height="140" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>  
            </Col>
            <Col>
            <iframe src="https://open.spotify.com/embed/playlist/1b5lbK1SleNHcc2GyOjx2r" width="140" height="140" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Col>          
        </Row>
        <br></br>
     

        <Row style={{ textAlign: "center" }}>
            <Col>
            <iframe src="https://open.spotify.com/embed/album/5d3B7aEbk5qvssQvlmQXJZ" width="140" height="140" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>       
            </Col>
            <Col>
            <iframe src="https://open.spotify.com/embed/playlist/65tdwZLDG2s2ozwMKt9xVL" width="140" height="140" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
            </Col>
           
        </Row>
      </Container>
    </>
    );
  }

  
export default Spotify;