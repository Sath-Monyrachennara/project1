import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    logo: {
        fontSize: "30px",
        color: "#fff",
        letterSpacing: "2px",
        marginTop: "-15px",
    }
}

const Footer = () => {
  return (
    <div>
        {/* Footer Section Begin */}
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='footer__about'>
                            <div className='footer__logo'>
                                <Link to="/" style={styles.logo}>HERBIVORE</Link>
                            </div>
                            <p>Our products are qualntity and naturally, are produce by our researcher and good for your skin.</p>
                            <Link to=""> <img src={require('../img/payment.png')} alt="" /> </Link>
                        </div>
                    </div>
                    <div className='col-lg-2 offset-lg-1 col-md-3 col-sm-6'>
                        <div className='footer__widget'>
                            <h6>quick links</h6>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-6'>
                        <div className='footer__widget'>
                            <h6>Extra links</h6>
                            <ul>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                                <li><Link to="/shopping-cart">Cart</Link></li>
                                <li><Link to="/checkout">Check Out</Link></li>
                                <li><Link to="/shop-details">Prodcut Detail</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 offset-lg-1 col-md-6 col-sm-6'>
                        <div className='footer__widget'>
                            <h6>NewLetter</h6>
                            <div className='footer__newslatter'>
                                <p>Send your email to get more infromation and news from our compay, please contact us.</p>
                                <form action="#">
                                    <input type="text" placeholder="Your email" />
                                    <button type="submit"><span className='icon_mail_alt'></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <div className='footer__copyright__text'>
                            <p>
                                All rights reserved | This website is made with <i className='fa fa-heart-o'
                                aria-hidden="true"></i> by Group 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* Footer Section End */}

        {/* Search Begin */}     
        <div className='search-model'>
            <div className='h-100 d-flex align-items-center justify-content-center'>
                <div className='search-close-switch'>+</div>
                <form className='search-model-form'>
                    <input type="text" id="search-input" placeholder="Search here....." />
                </form>
            </div>
        </div>
        {/* Search End */} 

    </div>
  )
}

export default Footer
