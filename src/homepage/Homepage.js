import React from "react";
import css from "../app/App.css";
import GoogleLogin from '../app/components/google/GoogleLogin';
const HomePage = () => {
  return (
    <div>
      <div className='container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <GoogleLogin />
      <h1>Buyer or Seller</h1>

      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </button>
        <button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ABOUT US
        </button>
      </div>
    </div>
  
        {/* <div>
          <h1>HomePage</h1>
          <h3><button>Buyer</button> or <button>Seller</button>?</h3>
        </div>
       */}
    </div>
  );
};

export default HomePage


export default HomePage