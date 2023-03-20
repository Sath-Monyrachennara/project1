import React from 'react';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';

const styles = {
    img: {
        maxHeight: "560px",
    },
    smImg: {
        width: "265px",
        height: "265px",
    }
}

const Aboutus = () => {
  return (
    <div>
        <Navbar />
        <Header />
        {/* Breadcrumb Section Begin */}
        <section className='breadcrumb-option'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='breadcrumb__text'>
                            <h4>About Us</h4>
                            <div className='breadcrumb__links'>
                                <Link to="/">Home</Link>
                                <span>About Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Breadcrumb Section End */}

        {/* About Section Begin */}
        <section className='about spad'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='about__pic'>
                            <img src={require('../img/about/img1.webp')} alt="" style={styles.img} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='about__item'>
                            <h4>Which Created With ?</h4>
                            <p>Natural ingredients, plant-based food-grade cold-pressed oils, steam distilled therapeutic-grade essential oils, GMO free soy wax.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='about__item'>
                            <h4>What We Believe ?</h4>
                            <p>We believe that daily bathing and skincare rituals should be enjoyable — a way to carve out some much-needed downtime in your hectic routine. </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <div className='about__item'>
                            <h4>Which Created Without ?</h4>
                            <p>Synthetic ingredients, parabens, sodium laurel sulfate, phthalates, chemicals, fillers, animal testing, mineral oils, petroleum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Section End */}

        {/* Testimonial Section Begin */}
        <section className='testimonial'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 p-0'>
                        <div className='testimonial__text'>
                            <span className='icon_quotations'></span>
                            <p>“Knowing that everything we put on our skin quickly absorbs into our bodies, 
                                we ethically source the finest raw natural materials the earth has to offer. With ingredients ranging from French pink clay to Brazilian gemstones, we formulate treatments that combine essential vitamins, minerals, and botanicals to restore skin to its optimum health and vitality.”
                            </p>
                            <div className='testimonial__author'>
                                <div className='testimonial__author__pic'>
                                    <img src={require('../img/about/img2.webp')} alt=""/>
                                </div>
                                <div className='testimonial__author__text'>
                                    <h5>Alex Jackson</h5>
                                    <p>Our Racher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 py-5 px-0'>
                        <div className='testimonial__pic set-bg' style={{backgroundImage: 'url("../img/about/testimonial-pic.jpeg")'}} ></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonial Section End */}
        
        {/* Team Section Begin */}
        <section className='team spad'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='section-title'>
                            <span>Our Team</span>
                            <h2>Meet Our Teamates</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='team__item'>
                            <img src={require('../img/about/img4.webp')} alt="" />
                            <h4>Anna Material</h4>
                            <span>C.E.O</span>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='team__item'>
                            <img src={require('../img/about/img2.webp')} alt="" />
                            <h4>Alex Jackson</h4>
                            <span>Reacher</span>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='team__item'>
                            <img src={require('../img/about/img3.webp')} alt="" />
                            <h4>Chris Tim</h4>
                            <span>Manager</span>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='team__item'>
                            <img src={require('../img/about/img5.webp')} alt="" style={styles.smImg}  />
                            <h4>Lora Kim</h4>
                            <span>Sale</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Team Section End */}
        <Footer />
    </div>
  )
}

export default Aboutus
