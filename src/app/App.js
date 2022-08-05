import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/Homepage';
import Header from '../homepage/header/Header';
import NotFound from './NotFound';
import SellerPage from './components/seller/SellerPage';
import PostProduct from './components/seller/PostProduct';
import EditProfile from './components/seller/EditProfile';
import CheckoutPage from './components/CheckoutPage'

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

/**
 * @name App
 * @returns component
 */

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Seller" element={<SellerPage />} />
        <Route path="Seller/Post" element={<PostProduct />} />
        <Route path="Seller/Info/:id" element={<EditProfile />} />
        <Route path="Checkout" element={<CheckoutPage />} />



      </Routes>
      {/* </Header> */}
    </BrowserRouter>

  );
}

export default App;
