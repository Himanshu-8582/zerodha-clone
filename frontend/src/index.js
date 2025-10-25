import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './Landing_Page/home/HomePage';
import Signup from './Landing_Page/signup/Signup';
import AboutPage from './Landing_Page/about/AboutPage';
import ProductPage from './Landing_Page/products/ProductPage';
import PricingPage from './Landing_Page/pricing/PricingPage';
import SupportPage from './Landing_Page/support/SupportPage';

import NotFound from './Landing_Page/NotFound';
import Navbar from './Landing_Page/Navbar';
import Footer from './Landing_Page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
