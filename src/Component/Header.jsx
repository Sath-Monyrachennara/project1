import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const styles = {
    logo: {
        fontSize: "30px",
        color: "#1d1d1d",
        letterSpacing: "2px",
        marginTop: "-12px",
    }
}

const Header = () => {
  return (
    <div>
        {/* Header Section Begin */}
        <header className='header'>
            <div className='header__top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-7'>
                            <div className='header__top__left'>
                                <p>Free shipping, 2-weeks return or refund guarantee.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-5'>
                            <div className='header__top__right'>
                                <div className='header__top__links'>
                                    <Link to="/signIn">Sign in</Link>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3'>
                        <div className='header__logo'>
                            <Link to="/" style={styles.logo} > HERBIVORE </Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <nav className='header__menu mobile-menu'>
                            <ul>
                                <li> <Link to="/">Home</Link> </li>
                                <li> <Link to='/shop'>Shop</Link> </li>
                                <li> <Link to="/about">About Us</Link> </li>
                                <li> <Link to="/blog">Blog</Link> </li>
                                <li> <Link to="/contact-us">Contacts</Link> </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                        <div className='header__nav__option'>
                            <Link to="" className='search-switch'>
                                <img src={require('../img/icon/search.png')} />
                            </Link>
                            <Link to="/shopping-cart" className='search-switch'>
                                <img src={require('../img/icon/cart.png')} /> <span>0</span>
                            </Link>
                            <div className='price'>$0.00</div>
                        </div>
                    </div>
                </div>
                <div className='canvas__open'><i className='fa fa-bars'></i></div>
            </div>
        </header>

    </div>
  )
}

export default Header
