import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Headers.css";

const Headers = () => {
    const { logOut, user } = UseAuth();
    return (
        <Navbar bg="light" expand="lg" className="header">
            <Container>
                <Link to="/" className="logo fs-2 fw-bold">
                    <img src="https://codeminifier.com/travel-stock-demo/assets/img/logo.png" alt="" />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 text-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <ul className="d-flex menu">
                            <li>
                                <NavLink to="/home" className="menuItem" activeClassName="selected">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/allpackages" className="menuItem" activeClassName="selected">All Packages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addpackage" className="menuItem" activeClassName="selected">Add Package</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hireguides" className="menuItem" activeClassName="selected">All Guides</NavLink>
                            </li>
                        </ul>

                    </Nav>
                    <Form className="d-flex menuBtn">
                        {
                            user.email &&
                            <span className="my-auto me-2">Hi,
                                <span className="fw-bold">
                                    {user.displayName}
                                </span>
                            </span>}
                        {
                            user.email ?
                                <Button onClick={logOut} className="btn-primary signout">
                                    <Link to="/"><i className="fas fa-sign-out-alt"></i> SignOut</Link>
                                </Button> :
                                <div>
                                    <Button className="btn-success signIn me-2">
                                        <Link to="/login"><i className="fas fa-sign-in-alt"></i> SignIn</Link></Button>
                                    <Button onClick={logOut} className="btn-primary signout">
                                        <Link to="/register"><i className="fas fa-sign-out-alt"></i> Register</Link>
                                    </Button>
                                </div>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;