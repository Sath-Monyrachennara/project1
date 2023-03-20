import React from 'react';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Product from '../Component/Product';
import Footer from '../Component/Footer';
import Breadcrump from '../Component/Breadcrump';

const Shop = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Breadcrump />
        <section className='shop spad'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='shop__product__option'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <div className='shop__product__option__left'>
                                        <p>Showing 1–12 of 12 results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Product />
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Shop
