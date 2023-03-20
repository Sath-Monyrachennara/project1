import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Slider = () => {
  return (
    <div>
        {/* Hero Section Begin */}
        <section className='hero'>
            <div className='hero__slider owl-carousel'>
                <div className='hero__items set-bg' style={{backgroundImage: 'url("../img/hero/hero-1.jpg")'}} >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-7 col-md-8'>
                                <div className='hero__text'>
                                    <h6>Summer Collection</h6>
                                    <h2>Fall - Winter Collections 2030</h2>
                                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                    commitment to exceptional quality.</p>
                                    <Link to="" className='primary-btn'> Shop now <span className='arrow_right'></span> </Link>
                                    <div className='hero__social'>
                                        <Link to="">
                                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                        </Link>
                                        <Link to=""> 
                                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                        </Link>
                                        <Link to=""> 
                                            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
                                        </Link>
                                        <Link to=""> 
                                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero__items set-bg' style={{backgroundImage: 'url("../img/hero/hero-2.jpg")'}} >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-7 col-md-8'>
                                <div className='hero__text'>
                                    <h6>Summer Collection</h6>
                                    <h2>Fall - Winter Collections 2030</h2>
                                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                    commitment to exceptional quality.</p>
                                    <Link to="" className='primary-btn'> Shop now <span className='arrow_right'></span> </Link>
                                    <div className='hero__social'>
                                        <Link to="">
                                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                        </Link>
                                        <Link to=""> 
                                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                        </Link>
                                        <Link to=""> 
                                            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
                                        </Link>
                                        <Link to=""> 
                                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Slider
