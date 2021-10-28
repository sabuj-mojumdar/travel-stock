import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {
    const { handlePasswordChange, handleEmailChange, handleRegistration, passwordError, handleNameChange } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    const handleRegister = (e) => {
        e.preventDefault();
        handleRegistration()
        history.push(redirect_url);
    }
    return (
        <div>
            <Container className="my-4">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <Form className="form-control m-3" onSubmit={handleRegister}>
                            <h1>Register Form</h1>

                            <Row className="mb-2">
                                <Col lg={3} className="text-start my-auto">
                                    <label>Your Name</label>
                                </Col>
                                <Col lg={9}>
                                    <FormControl onBlur={handleNameChange}
                                        type="text"
                                        placeholder="Enter your Name"
                                        className="me-2" required
                                    /></Col>
                            </Row>
                            <Row className="mb-2">
                                <Col lg={3} className="text-start my-auto">
                                    <label>Your Email</label>
                                </Col>
                                <Col lg={9}>
                                    <FormControl onBlur={handleEmailChange}
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="me-2" required
                                    /></Col>
                            </Row>
                            <Row>
                                <Col lg={3} className="text-start my-auto">
                                    <label>Your PassWord</label>
                                </Col>
                                <Col lg={9}>
                                    <FormControl onBlur={handlePasswordChange}
                                        type="password"
                                        placeholder="Enter your Password"
                                        className="me-2" required
                                    /></Col>
                            </Row>
                            <p className="text-danger">{passwordError}</p>
                            <Row className="m-3">
                                <Col>
                                    <Button variant="outline-primary" className=" w-100 bgbtn">
                                        <i className="fas fa-sign-out-alt"></i>
                                        <input type="submit" value="submit" className="border-0 bg" />
                                    </Button>
                                </Col>
                                <Col>
                                    <Link to="/login">
                                        <Button variant="outline-success" className="w-100"><i className="fas fa-sign-in-alt"></i> Login</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;