import React from "react";
import css from "../app/App.css";
import './Homepage.css';


const HomePage = () => {
  return (
    <div className='container'>
      <img src="Homepage_img.jpg" alt="Homepage_img"/>
      <h1>What are you waiting for?</h1>
      <div className='hero-btns'>
        <button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BUYER
        </button>
        <button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SELLER
        </button>
      </div>
    </div> 
  );
};

export default HomePage


 

