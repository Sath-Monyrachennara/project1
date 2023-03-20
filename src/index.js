import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Page/Home';
import Shop from './Page/Shop';
import About from './Page/Aboutus';
import Shopdetail from './Page/Shopdetail';
import Shoppingcart from './Page/Shoppingcart';
import Checkout from './Page/Checkout';
import Blog from './Page/Blog';
import Contact from './Page/Cotact';
import SignIn from './Page/Signin';
import Register from './Page/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/shop-details' element={<Shopdetail />}></Route>
      <Route path='/shopping-cart' element={<Shoppingcart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/contact-us' element={<Contact />}></Route>
      <Route path='/signIn' element={<SignIn />}></Route>
      <Route path='/register' element={<Register />}></Route>

    </Routes>
  </Router>
);

