import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../Context/Context';

const styles = {
    cartBtn: {
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#000",
        padding: "4px 15px",
        borderRadius: "1px",
    },
}

const Product = () => {
    
    const [Datas, setData] = useState([]);
    
    const fetchData = async () => {
        const res = await fetch("http://localhost:2000/api/product/getall");
        const data = await res.json();
        setData(data);//to Datas
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (

        <>
            <div className='row d-flex flex-row align-items-center justify-content-center'>
                {
                    Datas.map((prod) => (
                        <div className=' col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals'>
                            <div className='product__item'>
                                <div className='product__item__pic set-bg' style={{ backgroundImage: `url(${prod.productimg})` }} >
                                    <span className='label'>New</span>
                                </div>
                                <div className='product__item__text'>
                                    <h6 className='text-uppercase'>{prod.productname}</h6>
                                    <div className='rating'>
                                        <FontAwesomeIcon icon="fa fa-star-o" />
                                        <FontAwesomeIcon icon="fa fa-star-o" />
                                        <FontAwesomeIcon icon="fa fa-star-o" />
                                        <FontAwesomeIcon icon="fa fa-star-o" />
                                        <FontAwesomeIcon icon="fa fa-star-o" />
                                    </div>
                                    <h5>{prod.productprice}</h5>
                                    <button className='add-cart mt-3' style={styles.cartBtn}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </>
    )
}

export default Product
