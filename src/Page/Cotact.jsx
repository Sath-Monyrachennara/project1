import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import axios from "axios";

//const UPLOAD_ENDPOINT = "http://localhost:2000/api/contact/addMess";

const Cotact = () => {
    const [names, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
//    const [status, setStatus] = useState("");

    async function handleClick(e) {
        try{
            await axios.post("http://localhost:2000/api/contact/contact-us", {
                names,email,message
            })
        }
        catch(e){

        }
    }
    /*    const formData = new FormData();
        formData.append("name", names);
        formData.append("email", email);
        formData.append("message", message);
        const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
        });
        setStatus(resp.status === 200 ? "Thank you!" : "Error."); */

     /*   fetch('http://localhost:2000/api/product/addMess', {
            method: 'POST',
        // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.posts)
            }).then(function(response) {
                console.log(response);
                console.log(posts);
                return response.json();
        }); */

  return (
    <div>
        <Navbar />
        <Header />
        {/* Map Begin */}
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.770660333628!2d104.8885013138097!3d11.568291891787194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1677829608152!5m2!1sen!2skh" height={500} style={{border: "0"}} allowFullScreen={""} aria-hidden={false} tabindex={0} title="myFrame"></iframe>
        </div>
        {/* Map End */}
        <Alert className='mt-4' show={show} variant="secondary">
            <Alert.Heading>Hello Lovely Customers!</Alert.Heading>
            <p>Your message is submitted. Thanks you!</p>
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-dark">
                Cancel
            </Button>
            </div>
        </Alert>
        {/* Contact Section Begin */}
        <section className="contact spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__text">
                            <div className="section-title">
                                <span>Information</span>
                                <h2>Contact Us</h2>
                                <p>As you might expect of a company that began as a high-qualilty products with a good service. Please contact us for more information.</p>
                            </div>
                            <ul>
                                <li>
                                    <h4>Phnom Penh</h4>
                                    <p>st12 Monivong street, Mao Sethong <br />+10 234-908</p>
                                </li>
                                <li>
                                    <h4>Knal</h4>
                                    <p>st1 Knal Market, st12 Night Market <br />+12 345-423</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__form">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" onChange={e=>setName(e.target.value)} name="name" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" onChange={e=>setEmail(e.target.value)} name="email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea onChange={e=>setMessage(e.target.value)} placeholder="Message"></textarea>
                                        <button type="submit" className="site-btn" name="message" onClick={handleClick}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Section End */}

        <Footer />
    </div>
  )
}

export default Cotact
