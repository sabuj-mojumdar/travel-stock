import React, { useState } from 'react';
import { Card, Col, Button, Row, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Guide = (props) => {
    const { user } = UseAuth();
    const { _id, name, photo, area, level, hire, exp } = props.guide;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col>
            <Card className="card-box">
                <Card.Body>
                    <p className="fw-400 fs-4 text-center fw-bold">{name}</p>
                    <Row>
                        <Col xs={4} className="p-3 my-auto">
                            <img className="rounded-circle img-fluid" src={photo} alt="user" />
                        </Col>
                        <Col xs={8} className="p-3">
                            <div className="d-flex">
                                <div className="icon my-auto">
                                    <i className="far fa-user rounded-circle icon-bg p-2"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold">Experience</span>
                                    <span>{exp} years</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="icon my-auto">
                                    <i className="far fa-clock rounded-circle icon-bg p-2"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold">Hire</span>
                                    <span>{hire}</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="icon my-auto">
                                    <i className="fas fa-eye rounded-circle icon-bg p-2"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold">Level</span>
                                    <span>{level}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <p className="py-1 text-center">
                            <span className="text">Location: {area}</span>
                        </p>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Link to={`/hireguides/${_id}`}>
                                <Button className="w-100"> View Profile</Button></Link>
                        </Col>
                        <Col xs={6}>
                            <Button className="w-100 btn btn-success" onClick={handleShow}>Send Message</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome {user.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" >
                            <Form.Label>
                                Your Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>
                                Your Email
                            </Form.Label>
                            <Form.Control type="text" placeholder="Your Email" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Package Description
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Massage"
                                style={{ height: '100px' }} required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={`/hireguides/${_id}`}>
                        <Button variant="primary" onClick={handleClose}>
                            Send Massage
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Col>
    );
};

export default Guide;