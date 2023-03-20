import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        {/* Offcanvas Menu Begin */}
        <div className='offcanvas-menu-overlay'></div>
        <div className='offcanvas-menu-wrapper'>
            <div className='offcanvas__option'>
                <div className='offcanvas__links'>
                    <Link to="/signIn">Sign in</Link>
                </div>
                <div className='offcanvas__top__hover'>
                    <span>Usd <i className='arrow_carrot-down'></i></span>
                    <ul>
                        <li>USD</li>
                        <li>EUR</li>
                        <li>USD</li>
                    </ul>
                </div>
            </div>
            <div className='offcanvas__nav__option'>
                <Link to="" className='search-switch'> <img src={require('../img/icon/search.png')} alt="" /> </Link>
                <Link to="" className='search-switch'> <img src={require('../img/icon/heart.png')} alt="" /> </Link>
                <Link to="" className='search-switch'> <img src={require('../img/icon/cart.png')} alt="" /> </Link>
                <div className='price'>$0.00</div>
            </div>
            <div id="mobile-menu-wrap"></div>
            <div className='offcanvas__text'>
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
