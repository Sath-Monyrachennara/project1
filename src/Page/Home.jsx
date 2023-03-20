import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Product from '../Component/Product';
import Footer from '../Component/Footer';
import img1 from '../img/blog/img1.webp';
import img2 from '../img/blog/img4.jpg';
import img3 from '../img/blog/img2.png';

const styles = {
    shopBtn: {
        color: "#111",
        position: "absolute",
        right: "250px",
        top: "600px",
        padding: "30px 200px",
    },
    img: {
        width: "450px",
        height: "450px",
    },
    bigImg: {
        width: "430px",
        height: "380px",
    },
    
}

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='width-auto'>
            <Link to="/"> <img src={require('../img/hero/img3.webp')} alt="" /> </Link> 
            <Link to="/shop" className='text-uppercase' style={styles.shopBtn}></Link>
        </div>
        
        {/* Banner Section Begin */}
        <section className='banner spad'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 offset-lg-4'>
                        <div className='banner__item'>
                            <div className='banner__item__pic' style={styles.img}>
                                <img src={require('../img/banner/img1.webp')} alt="" />
                            </div>
                            <div className='banner__item__text'>
                                <h2>Herbivore Serum</h2>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='banner__item banner__item--middle'>
                            <div className='banner__item__pic' style={styles.bigImg}>
                                <img src={require('../img/banner/img2.webp')} alt="" />
                            </div>
                            <div className='banner__item__text mb-5'>
                                <h2>Newest products</h2>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='banner__item banner__item--last'>
                            <div className='banner__item__pic' style={styles.img}>
                                <img src={require('../img/banner/img3.webp')} alt="" />
                            </div>
                            <div className='banner__item__text'>
                                <h2>Best seller in 2030</h2>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Banner Section End */}

        {/* Product Section Begin */}
        <section class="product spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="filter__controls">
                            <li class="active text-uppercase fs-2" data-filter="*">New Arrivals</li>
                        </ul>
                    </div>
                </div>
                <Product /> 
            </div>
        </section>
        {/* Product Section End */}

        {/* Categories Section Begin */}
        <section className='categories spad'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-3'>
                        <div className='categories__hot__deal'>
                            <img src={require('../img/img1.png')} alt="" />
                            <div className='hot__deal__sticker'>
                                <span>Sale Of</span>
                                <h5>$39.99</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 offset-lg-1'>
                        <div className='categories__deal__countdown'>
                            <span>Women's Day on 8 March</span>
                            <h2>Emerald Deep Moisture Glow Oil</h2>
                            <p>Herbivore Botanicals Emerald Deep Moisture Glow Oil. Meet Emerald, 
                               a nourishing and lightweight face oil packed with adaptogens and vegan squalane to moisturize skin and defend against visible signs 
                               of aging, all in a quick-absorbing formula.</p>
                            <p>Ultra Nourishing and Soothing. Suitable for all skin types, this.</p>
                            <Link to="/shop" className='primary-btn'>Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Categories Section End */}

        {/* Latest Blog Section Begin */}
        <section className="latest spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Latest News</span>
                            <h2>Our Latest Blogs</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic set-bg" style={{backgroundImage: `url(${img1})`}} ></div>
                            <div className="blog__item__text">
                                <span> <img src={require('../img/icon/calendar.png')} alt="" /> 16 February 2020</span>
                                <h5>Herbivore botanicals are natural 90%.</h5>
                                <Link to="/shop">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic set-bg" style={{backgroundImage: `url(${img2})`}}></div>
                            <div className="blog__item__text">
                                <span><img src='../img/icon/calendar.png' alt='' /> 21 February 2020</span>
                                <h5>A botanical is a plant or plant part valued.</h5>
                                <Link to="/shop">Discover</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic set-bg" style={{backgroundImage: `url(${img3})`}}></div>
                            <div className="blog__item__text">
                                <span><img src={require('../img/icon/calendar.png')} alt='' /> 28 February 2020</span>
                                <h5>The Health Benefits Of Herbivous.</h5>
                                <Link to="/shop">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Latest Blog Section End */}
        <Footer />    
    </div>
  )
}

export default Home
