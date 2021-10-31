import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const MyProfile = () => {
    const { user } = UseAuth();
    return (
        <div className="my-Profile">
            <Container fluid className="p-0">
                <div className="banner">
                    <div className="banner-title text-center text-white">
                        <h2 className="title fs-1 fw-bold">Hi: {user.displayName}</h2>
                        <p className="fs-4 fw-bold">Update and view your profile</p>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="p-3">
                    <Col lg="3">
                        <Card className="text-center">
                            <Card.Body>
                                <img className="user-img rounded-circle mb-3 img-fluid" src={user.photoUrl} alt="user" />
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                                <div className="text-start">
                                    <p>
                                        <NavLink to="/hireguide/guide" className="text" activeClassName="text-active"><i className="fas fa-chart-line me-3"></i>Guide Details</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/hireguide" className="text" activeClassName="text-active"><i className="fas fa-chart-line me-3"></i>All Guide</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/hireguide/guide/myprofile" className="text" activeClassName="text-active"><i className="fas fa-chart-line me-3"></i>Update Profile</NavLink>
                                    </p>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="9">
                        <Card className='mb-3'>
                            <Card.Body>
                                <h4>My Account</h4>
                                <Form>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            Your Name
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            Email
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="example@gmail.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            Your Title
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Web designer" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            Phone
                                        </Form.Label>
                                        <Form.Control type="phone" placeholder="123456789" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            Address
                                        </Form.Label>
                                        <Form.Control type="address" placeholder="12, mirpur-10, Dhaka" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            City
                                        </Form.Label>
                                        <Form.Control type="city" placeholder="Dhaka, Bangladesh" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            State
                                        </Form.Label>
                                        <Form.Control type="city" placeholder="Dhaka" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>
                                            Zip
                                        </Form.Label>
                                        <Form.Control type="zip" placeholder="3822" />
                                    </Form.Group>
                                    <Col xs="12" className="my-1">
                                        <Button type="submit" className="w-100 py-2 btn-danger bookNowbtn">Update Now <i className="fas fa-arrow-right"></i></Button>
                                    </Col>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyProfile;