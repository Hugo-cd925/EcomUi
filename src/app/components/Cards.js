import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return(
        <div className="cards">
            <h1>Check out these AWESOME products!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                        src = "../../images/shopping-basket-icon.png" text="Explore our Website" label="Adventure" path = '/services'/>
                    </ul>
            
                </div>
            </div>
        
        </div>
    );
}

export default Cards;