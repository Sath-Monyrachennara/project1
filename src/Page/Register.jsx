import React from 'react';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';

const styles = {
    form: {
        width: "380px",
    },
    head: {
        fontSize: "35px",
    },
    header: {
        color: "#1d1d1d",
        fontSize: "17px",
    },
    headSame: {
        color: "#1d1d1d",
        borderBottom: "2.5px solid #111",
        fontSize: "17px",
    },
    input: {
        backgroundColor: "#e7e7e7",
        borderRadius: "3px",
        padding: "6px 10px",
        border: "none",
        width: "320px",
    },
    button: {
        backgroundColor: "#691f8e",
        color: "#fff",
        cusor: "pointer",
        padding: "6px 0px",
        borderRadius: "3px",
        width: "320px",
        border: "none",
    },
    link: {
        fontSize: "12px",
        color: "#76299c",
        textDecoration: "underline",
        cusor: "pointer",
        fontWeight: "500",
    },
    small: {
        fontSize: "12px",
        color: "#837f7f",
        fontWeight: "500",
    },
    p: {
        width: "310px",
    }
}

const Register = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='my-auto pb-5 pt-5'>
            <h1 className='text-uppercase text-center mb-4' style={styles.head}>account</h1>
            <div className='mx-auto mb-4 text-center'>
                <Link to="/signIn" className='fw-bold text-uppercase pb-2 px-5' style={styles.header}>Sing in</Link>
                <Link to="/register" className='fw-bold text-uppercase px-5 ' style={styles.headSame}>Register</Link>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center mx-auto mb-5 pb-4' >
                <p className='mt-0 mx-auto' style={styles.p}>Create an account and benefit from a more personal shopping experience, and quicker online checkout.</p>
                <p className='mx-auto mb-4' style={styles.p}>All fields are mandatory.</p>
                <form action="" className='d-flex flex-column align-items-center justify-content-center mx-auto' style={styles.form}> 
                    <input type="email" name="email" id="email" placeholder='Email' className='mb-4' style={styles.input} required />
                    <input type="text" name="fname" id="fname" placeholder='First name' className='mb-4' style={styles.input} required />
                    <input type="text" name='lname' id='lname' placeholder='Last name' className='mb-4' style={styles.input} required />
                    <input type="password" name='password' id='password' placeholder='Password' className='mb-4' style={styles.input} required />
                    <button type='submit' name="signIn" className='mt-8' style={styles.button}>Sign In</button>
                    <small style={styles.small} className="text-center">don't have an account? 
                        <Link to="/register" style={styles.link}>register now</Link>
                    </small>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register
