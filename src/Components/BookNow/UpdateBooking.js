import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseBook from '../../Hooks/UseBook';
import UseGuide from '../../Hooks/UseGuide';

const UpdateBooking = () => {
    const { user } = UseAuth();
    const { ubook, handleUpdateCheckIn, handleUpdateCheckOut, handleUpdateAdult, handleUpdateChild, handleUpdateRoom, handleUpdateNight, handleUpdateOrder, handleUpdateGuide, handleUpdateBooking } = UseBook();
    const { allGuides } = UseGuide();
    const { checkIn, checkOut, adult, child, room, night, order, guide } = ubook;


    return (
        <div>
            <Container className="my-5">
                <h2 className="text-center">Update your Booking: {user.displayName}</h2>
                <Form onSubmit={handleUpdateBooking}>
                    <Form.Group className="mb-3" >
                        <Form.Label>
                            Check In
                        </Form.Label>
                        <Form.Control type="date" onChange={handleUpdateCheckIn} value={checkIn || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>
                            Check Out
                        </Form.Label>
                        <Form.Control type="date" onChange={handleUpdateCheckOut} value={checkOut || ''} />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Col sm="6">
                            <Form.Label>
                                Adult
                            </Form.Label>
                            <Form.Control type="number" onChange={handleUpdateAdult} value={adult || ''} />
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                Child
                            </Form.Label>
                            <Form.Control type="number" onChange={handleUpdateChild} value={child || ''} />
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                Room
                            </Form.Label>
                            <Form.Select onChange={handleUpdateRoom} value={room || ''}>
                                <option>Select room</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                Night
                            </Form.Label>
                            <Form.Select onChange={handleUpdateNight} value={night || ''}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                Update Order
                            </Form.Label>
                            <Form.Select onChange={handleUpdateOrder} value={order || ''}>
                                <option value="Procecing" >Procecing</option>
                                <option value="Packaging">Packaging</option>
                                <option value="Cancelling">Cencel</option>
                                <option value="Place Order">Place Order</option>
                            </Form.Select>
                        </Col>
                        <Col sm="6">
                            <Form.Label>
                                Guide
                            </Form.Label>
                            <Form.Select onChange={handleUpdateGuide} value={guide || ''}>
                                {
                                    allGuides.map(gd => <option key={gd._id} value={gd.name}>{gd.name}</option>)
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Row md={2} xs={1}>
                        <Col className="my-1">
                            <Button type="submit" className="w-100 py-2 btn-danger bookNowbtn">Update <i className="fas fa-arrow-right"></i></Button>
                        </Col>
                        <Col className="my-1">
                            <Link to="/placeorder"><Button className="btn-primary w-100"> PlaceOrder Page </Button></Link>
                        </Col>
                    </Row>
                </Form>

            </Container>


        </div>
    );
};

export default UpdateBooking;