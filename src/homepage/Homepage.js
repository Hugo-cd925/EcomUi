import React from "react";
import Styles from './Homepage.module.css';
import Cards from '../homepage/pages/Cards';

const HomePage = () => {
  return (
    <>
      <div className={Styles.container}>
        <img className={Styles.homeimg} src="Homepage_img.jpg" alt="Homepage_img" />
        <h1>Welcome To Our Site</h1>
       
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default HomePage

