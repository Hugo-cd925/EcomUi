// import React from "react";
// import {Button} from './Button';
// import '../components/HeroSection.css';
// import '../App.css';

import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';




function HeroSection() {
    return(
        <div className='hero-container'>
            <h1>Buyer or Seller</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    MORE INFO
                </Button>
            </div>
         

        </div>
    );
}

export default HeroSection;