import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [Datas, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch("http://localhost:2000/api/product/getblog");
        const data = await res.json();
        setData(data);//to Datas
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div>
            <Navbar />
            <Header />
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-blog set-bg" style={{backgroundImage: 'url("../img/ban.jpg")'}} >
                
            </section>
            {/* Breadcrumb Section End */}

            {/* Blog Section Begin */}
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        {
                            Datas.map((prod) => (
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic set-bg" style={{backgroundImage: `url(${prod.blogimage})`}}></div>
                                    <div className="blog__item__text">
                                        <span><img src={require('../img/icon/calendar.png')} alt="" /> {prod.blogdate} </span>
                                        <h5>{prod.blogtitle}</h5>
                                        <Link to="/shop">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            <Footer />
        </div>
        </>
    )
    }

export default Blog
