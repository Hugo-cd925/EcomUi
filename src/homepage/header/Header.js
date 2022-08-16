import React, { useState, useEffect } from 'react';
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
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
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
  </ul> 

          <GoogleLogin setLoggedIn={setLoggedIn} />
          <a href='/Seller' target={'_seller'}>     
              <button className='cart-button'>SELLER</button>
          </a> 
          <a href='/cart' target={'_seller'}>     
              <button className='cart-button'>CART</button>
          </a> 
       
        </div>
      </nav>
    </>
  );
}

export default Header;
