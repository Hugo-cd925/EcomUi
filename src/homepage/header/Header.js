import React from 'react'
import Cards from '../../app/components/HomePage/Cards';
import HeroSection from '../../app/components/HomePage/HeroSection';
import Footer from '../../app/components/HomePage/Footer';
import NavBar from '../../app/components/HomePage/NavBar';

const Header = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Cards/>
    <Footer/>
  
    </>
  )
}

export default Header