import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Home.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      // window.removeEventListener('resize', showButton)
    }
  }, []);


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

            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;