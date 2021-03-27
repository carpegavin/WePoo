import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' id="nameHead" >
              
              WePoo
            </Link>

            <ul className={ 'nav-menu active' }>
              <li className='nav-item'>
                <Link to='/map' className='nav-links' >
                  Go
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/player'
                  className='nav-links'
                >
                  Going
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/review'
                  className='nav-links'
                >
                  Gone
                </Link>
              </li>

            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;