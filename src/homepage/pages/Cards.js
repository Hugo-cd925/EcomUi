import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Looking for Something Specific?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='shopping_basket_2.jpg'
              text='Trade allows users to post products for buyers to purchase, take some time to browse through some.'
              label='Browse'
              path='/products'
            />
             <CardItem
              src='selling_tag.png'
              text='Have something worth selling? Try creating a Seller Account and post products for others to see.'
              label='Selling?'
              path='/SignIn'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;