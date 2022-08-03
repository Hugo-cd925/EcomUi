import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/Homepage';
import Header from '../homepage/header/Header';
import NotFound from './NotFound';
import SellerPage from './components/seller/SellerPage';

/**
 * @name App
 * @returns component
 */

const App = () => {
  return (
    <BrowserRouter>
    {/* <Header> */}
    <Routes>
      <Route exact path="/"   element={<HomePage /> } />
       <Route path="*" element={<NotFound />} />
       <Route path="seller" element={<SellerPage />} />
   
    </Routes>
    {/* </Header> */}
    </BrowserRouter>
    
  );
}

export default App;
