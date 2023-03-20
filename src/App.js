import Navbar from './Component/Navbar';
import './App.css';
import Home from './Page/Home';
import Shop from './Page/Shop';
import Shopdetail from './Page/Shopdetail';
import Shoppingcart from './Page/Shoppingcart';
import Checkout from './Page/Checkout';
import Blog from './Page/Blog';
import Cotact from './Page/Cotact';
import Signin from './Page/Signin';
import Register from './Page/Register';
import { Route, Router, Routes } from 'react-router';
import Aboutus from './Page/Aboutus';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/about' element={<Aboutus />}></Route>
        <Route path='/shop-details' element={<Shopdetail />}></Route>
        <Route path='/shopping-cart' element={<Shoppingcart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact-us' element={<Cotact />}></Route>
        <Route path='/signIn' element={<Signin />}></Route>
        <Route path='/register' element={<Register />}></Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
