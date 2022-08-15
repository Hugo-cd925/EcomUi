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
              src='shopping_basket.jpg'
              text='Looking for something exciting? Click Here!'
              label='Browse'
              path='/services'
            />
             <CardItem
              src='shopping_basket.jpg'
              text='Looking for something exciting? Click Here!'
              label='Browse'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='shopping_basket.jpg'
              text='Looking for something exciting? Click Here!'
              label='Browse'
              path='/services'
            />
            <CardItem
              src='shopping_basket.jpg'
              text='Looking for something exciting? Click Here!'
              label='Browse'
              path='/services'
            />
           <CardItem
              src='shopping_basket.jpg'
              text='Looking for something exciting? Click Here!'
              label='Browse'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;