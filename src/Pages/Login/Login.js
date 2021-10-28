import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { signInWithGoogle, handlePasswordChange, handleEmailChange, handleLogin } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })

    }
    const handleCustomLogin = (e) => {
        handleLogin(e)
            .then(result => {
                console.log(result.user);
                history.push(redirect_url);
            })

    }
    return (
        <Container className="my-4">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <Form onSubmit={handleCustomLogin} className="form-control m-3">
                        <h1>Login Form</h1>
                        <Row className="mb-2">
                            <Col lg={3} className="text-start my-auto">
                                <label>Your Email</label>
                            </Col>
                            <Col lg={9}>
                                <FormControl
                                    onBlur={handleEmailChange}
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
                                <FormControl
                                    onBlur={handlePasswordChange}
                                    type="password"
                                    placeholder="Enter your Password"
                                    className="me-2" required
                                /></Col>
                        </Row>
                        <Row className="m-3">
                            <Col>
                                <Button variant="outline-primary" className=" w-100 bgbtn">
                                    <i className="fas fa-sign-out-alt"></i>
                                    <input type="submit" value="login" className="border-0 w-100 bg" />
                                </Button>
                                {/* <Button variant="outline-success" className="w-100"><i className="fas fa-sign-in-alt"></i> Login</Button> */}
                            </Col>
                            <Col>
                                <Link to="/register">
                                    <Button variant="outline-primary" className=" w-100">
                                        <i className="fas fa-sign-out-alt"></i> Register</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                    <Row className="m-3">
                        <Button className="btn-danger mb-2" onClick={handleGoogleLogin}>Google SignIn</Button>
                    </Row>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
};

export default Login;