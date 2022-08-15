import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Header.css';
import GoogleLogin from '../../app/components/google/GoogleLogin';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loggedIn, setLoggedIn] = useState(null);

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
  }, []);

  window.addEventListener('resize', showButton);
  const nav = useNavigate();
  const sendSeller = () => {
    nav('/Seller');
    console.log('hit');
  };
  return (


    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRADE
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/Seller'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Seller
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
        
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
            {/* 
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
  </li> 
            <li>
              <Link
                to='/Seller'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Seller
              </Link>
            </li> 
            */}
  </ul> 

          <GoogleLogin setLoggedIn={setLoggedIn} />
          {button && <Button  buttonStyle='btn--outline'>BUYER</Button>}
          {button && <Button  buttonStyle='btn--outline'>SELLER</Button>}
        </div>
      </nav>
    </>
  );
}

export default Header;