import React, { useState, useEffect } from 'react';
import Navbar from "../../Navbar"
import Footer from "../../Footer"
import './Home.css';


function Home() {

  return (


    <>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' id="nameHead" onClick={closeMobileMenu}>
              
              WePoo
                          </Link>

            <ul className={ 'nav-menu active' }>
              <li className='nav-item'>
                <Link to='/map' className='nav-links' onClick={closeMobileMenu}>
                  Gotta Go
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/player'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Going
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/review'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Gone
                </Link>
              </li>

    <Navbar/>
    <Footer/>
    
    </>

  );
}

export default Home;