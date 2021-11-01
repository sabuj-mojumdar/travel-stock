import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container className="text-white text-center p-3">
                <Row lg={4} sm={2} xs={1} className="border border-top-0 border-start-0 border-end-0">
                    <Col>
                        <Link to="/" className="footer-logo w-50 px-1 pb-3 rounded-3 bg-white">
                            <img className="img-fluid" src="https://codeminifier.com/travel-stock-demo/assets/img/logo.png" alt="" />
                        </Link>
                        <p><i className="fas fa-map-marker-alt"></i> Banglabazar, Noakhali</p>
                        <p><i className="fas fa-phone"></i> any question: 01812-435207</p>
                        <p><i className="fas fa-envelope"></i> mojumdarnb@gmail.com</p>
                    </Col>
                    <Col>
                        <h4>FEATURED TOURS</h4>
                        <div className="underline">   </div>
                        <p>Who We Are</p>
                        <p>Our Mission</p>
                        <p>Awards</p>
                        <p>Experience</p>
                        <p>Success Story</p>
                    </Col>
                    <Col className="quickLink">
                        <h4>Quick Links</h4>
                        <div className="underline">   </div>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/allpackages">All Packages</Link></p>
                        <p><Link to="/hireguides">All Guides</Link></p>
                        <p><Link to="/register">Register</Link> </p>
                        <p><Link to="/login">Login</Link> </p>
                    </Col>
                    <Col className="quickLink">
                        <h4>Popular Destination</h4>
                        <div className="underline">   </div>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/">London</Link></p>
                        <p><Link to="/">Bankok</Link></p>
                        <p><Link to="/">New York</Link> </p>
                        <p><Link to="/">Rome</Link> </p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col lg={6}>
                        <h6>Follow Us:  </h6>
                        <div>
                            <i className="fab fa-facebook btn-success p-2 rounded-circle mx-2"></i>
                            <i className="fab fa-youtube btn-success p-2 rounded-circle me-2"></i>
                            <i className="fab fa-instagram btn-success p-2 rounded-circle me-2"></i>
                            <i className="fab fa-twitter btn-success p-2 rounded-circle me-2"></i>
                            <i className="fab fa-linkedin p-2 btn-success rounded-circle me-2"></i>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h6>Sign in and don’t miss anything!</h6>
                        <div className="d-flex">
                            <input type="text" className="form-control w-50 rounded-0" placeholder="Your Email" />
                            <input type="submit" value="Subscribe" className="btn btn-primary w-25 rounded-0" />
                        </div>
                    </Col>
                </Row>
                <Row className="pt-2 text-center border border-1 border-bottom-0 border-start-0 border-end-0">
                    <h6>© Copyright Travel Stock. All Right Reserved. Designed and Developed by Sabuj Majumdar</h6>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;