import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/Homepage';
import Header from '../homepage/header/Header';
import NotFound from './NotFound';


/**
 * @name App
 * @returns component
 */

const App = () => {
  return (
  
    <Header>
    <Routes>
      <Route exact path="/"   element={<HomePage /> } />
       <Route path="*" element={<NotFound />} />
   
    </Routes>
    </Header>
 
    
  );
}

export default App;
