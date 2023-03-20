import React from 'react';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Shopdetail = () => {
  return (
    <div>
        <Navbar />
        <Header />
        {/* Shop Details Section Begin */}
        <section className='shop-details'>
            <div className='product__details__pic'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='product__details__breadcrumb'>
                                <Link to="/">Home</Link>
                                <Link to="/shop">Shop</Link>
                                <span>Product Details</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3'>
                            <ul className='nav nav-tabs' role="tablist">
                                <li className='nav-item'>
                                    <Link to="" className='nav-link active' data-toggle="tab" href="#tabs-1" role="tab">
                                        <div className='product__thumb__pic set-bg' style={{backgroundImage: 'url("../img/shop-details/thumb-1.png")'}} >
                                        </div>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="" className='nav-link' data-toggle="tab" href="#tabs-2" role="tab">
                                        <div className='product__thumb__pic set-bg' style={{backgroundImage: 'url("../img/shop-details/thumb-2.png")'}} >
                                        </div>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="" className='nav-link' data-toggle="tab" href="#tabs-3" role="tab">
                                        <div className='product__thumb__pic set-bg' style={{backgroundImage: 'url("../img/shop-details/thumb-3.png")'}} >
                                        </div>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="" className='nav-link' data-toggle="tab" href="#tabs-4" role="tab">
                                        <div className='product__thumb__pic set-bg' style={{backgroundImage: 'url("../img/shop-details/thumb-4.png")'}} >
                                            <FontAwesomeIcon icon="fa fa-play" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-md-9'>
                            <div className='tab-content'>
                                <div className='tab-pane active' id="tabs-1" role="tabpanel">
                                    <div className='product__details__pic__item'>
                                        <img src={require('../img/shop-details/product-big-2.png')} alt="" />
                                    </div>
                                </div>
                                <div className='tab-pane' id="tabs-2" role="tabpanel">
                                    <div className='product__details__pic__item'>
                                        <img src={require('../img/shop-details/product-big-3.png')} alt="" />
                                    </div>
                                </div>
                                <div className='tab-pane' id="tabs-3" role="tabpanel">
                                    <div className='product__details__pic__item'>
                                        <img src={require('../img/shop-details/product-big.png')} alt="" />
                                    </div>
                                </div>
                                <div className='tab-pan' id="tabs-4" role="tabpanel">
                                    <div className='product__details__pic__item'>
                                        <img src={require('../img/shop-details/product-big-4.png')} alt="" />
                                        <Link to="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" className='video-popup' > <FontAwesomeIcon icon="fa fa-play" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product__details__content'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='product__details__text'>
                                <h4>Hooded thermal anorak</h4>
                                <div className='rating'>
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-regular fa-star" />
                                    <span> - 5 Reviews</span>
                                </div>
                                <h3>$270.00 <span>70.00</span></h3>
                                <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                    cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                                with placket.</p>
                                <div className='product__details__cart__optio'>
                                    <div className='quantity'>
                                        <div className='pro-qty'>
                                            <input type="text" value="1" />
                                        </div>
                                    </div>
                                    <Link to="" className='primary-btn'>add to cart</Link>
                                </div>
                                <div className='product__details__btns__option'>
                                    <Link to=""> <FontAwesomeIcon icon="fa fa-heart" />add to wishlist </Link>
                                    <Link to=""> <FontAwesomeIcon icon="fa fa-exchange" />Add To Compare </Link>
                                </div>
                                <div className='product__details__last__option'>
                                    <h5><span>Guaranteed Safe Checkout</span></h5>
                                    <img src={require('../img/shop-details/details-payment.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Shop Details Section End */}

        {/* Related Section Begin */}
        <section className='related spad'>
            <div className='containe'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 className='related-title'>Related Product</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                        <div className='product__item'>
                            <div className='product__item__pic set-bg' style={{backgroundImage: 'url("../img/product/product-1.jpg")'}}>
                                <span className='label'>New</span>
                                <ul className='product__hover'>
                                    <li> <Link to=""> <img src={require('../img/icon/heart.png')} alt="" /> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/compare.png')} alt="" /> <span>Compare</span> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/search.png')} alt="" /> </Link> </li>
                                </ul>
                            </div>
                            <div className='product__item__text'>
                                <h6>Piqué Biker Jacket</h6>
                                <Link to="" className='add-cart'>+ Add To Cart</Link>
                                <div className='rating'>
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                </div>
                                <h5>$67.24</h5>
                                <div className='product__color__select'>
                                    <label for="pc-1">
                                        <input type="radio" id="pc-1" />
                                    </label>
                                    <label className='active black' for="pc-2">
                                        <input type="radio" id="pc-2" />
                                    </label>
                                    <label className='grey' for="pc-3">
                                        <input type="radio" id="pc-3" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                        <div className='product__item'>
                            <div className='product__item__pic set-bg' style={{backgroundImage: 'url("../img/product/product-2.jpg")'}} >
                                <ul className='product__hover'>
                                    <li> <Link to=""> <img src={require('../img/icon/heart.png')} alt="" /> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/compare.png')} alt="" /> <span>Compare</span> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/search.png')} alt="" /> </Link> </li>
                                </ul>
                            </div>
                            <div className='product__item__text'>
                                <h6>Piqué Biker Jacket</h6>
                                <Link to="" className='add-cart'>+ Add To Cart</Link>
                                <div className='rating'>
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                </div>
                                <h5>$67.24</h5>
                                <div className='product__color__select'>
                                    <label for="pc-4">
                                        <input type="radio" id="pc-4" />
                                    </label>
                                    <label className='active black' for="pc-5">
                                        <input type="radio" id="pc-5" />
                                    </label>
                                    <label className='grey' for="pc-6">
                                        <input type="radio" id="pc-6" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                        <div className='product__item sal'>
                            <div className='product__item__pic set-bg' style={{backgroundImage: 'url("../img/product/product-3.jpg")'}} >
                                <span className='label'>Sale</span>
                                <ul className='product__hover'>
                                    <li> <Link to=""> <img src={require('../img/icon/heart.png')} alt="" /> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/compare.png')} alt="" /> <span>Compare</span> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/search.png')} alt="" /> </Link> </li>
                                </ul>
                            </div>
                            <div className='product__item__text'>
                                <h6>Multi-pocket Chest Bag</h6>
                                <Link to="" className='add-cart'>+ Add To Cart</Link>
                                <div className='rating'>
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                </div>
                                <h5>$43.48</h5>
                                <div className='product__color__select'>
                                    <label for="pc-7">
                                        <input type="radio" id="pc-7" />
                                    </label>
                                    <label className='active black' for="pc-8">
                                        <input type="radio" id="pc-8" />
                                    </label>
                                    <label className='grey' for="pc-9">
                                        <input type="radio" id="pc-9" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                        <div className='product__item'>
                            <div className='product__item__pic set-bg' style={{backgroundImage: 'url("../img/product/product-4.jpg")'}} >
                                <ul className='product__hover'>
                                    <li> <Link to=""> <img src={require('../img/icon/heart.png')} alt="" /> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/compare.png')} alt="" /> <span>Compare</span> </Link> </li>
                                    <li> <Link to=""> <img src={require('../img/icon/search.png')} alt="" /> </Link> </li>
                                </ul>
                            </div>
                            <div className='product__item__text'>
                                <h6>Diagonal Textured Cap</h6>
                                <Link to="" className='add-cart'>+ Add To Cart</Link>
                                <div className='rating'>
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                    <FontAwesomeIcon icon="fa fa-star-o" />
                                </div>
                                <h5>$60.9</h5>
                                <div className='product__color__select'>
                                    <label for="pc-10">
                                        <input type="radio" id="pc-10" />
                                    </label>
                                    <label className='active black' for="pc-11">
                                        <input type="radio" id="pc-11" />
                                    </label>
                                    <label className='grey' for="pc-12">
                                        <input type="radio" id="pc-12" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Related Section End */}
        <Footer />
    </div>
  )
}

export default Shopdetail
