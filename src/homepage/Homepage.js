import React from "react";
import Styles from './Homepage.module.css';
import Cards from '../homepage/pages/Cards';


const HomePage = () => {
  return (
    <>
      <div className={Styles.container}>
        <img src="Homepage_img.jpg" alt="Homepage_img" />
        <h1>What are you waiting for?</h1>
        <div className='hero-btns'>
          <button
            className={Styles.btns}
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            BUYER
          </button>
          <button
            className={Styles.btns}
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            SELLER
          </button>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default HomePage;




