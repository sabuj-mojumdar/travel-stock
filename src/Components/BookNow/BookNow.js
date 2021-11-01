import React from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import UseGuide from '../../Hooks/UseGuide';
import UsePackage from '../../Hooks/UsePackage';

const BookNow = () => {
    const { allGuides, handlecheckIn, handleCheckOut, handleAdult, handleChild, handleRoom, handleNight, handleOrder, handleGuide, handleBooking } = UseGuide();
    const { uniquePackage } = UsePackage();
    const price = parseInt(uniquePackage.price);

    return (
        <Card className='mb-3'>
            <Card.Body>
                <Form onSubmit={handleBooking}>
                    <Form.Group className="mb-1" >
                        <Form.Label>
                            Check In
                        </Form.Label>
                        <Form.Control type="date" onChange={handlecheckIn} required />
                    </Form.Group>
                    <Form.Group className="mb-1" >
                        <Form.Label>
                            Check Out
                        </Form.Label>
                        <Form.Control type="date" onChange={handleCheckOut} required />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Col sm="6" className="mb-1">
                            <Form.Label>
                                Adult
                            </Form.Label>
                            <Form.Control type="number" onChange={handleAdult} required />
                        </Col>
                        <Col sm="6" className="mb-1">
                            <Form.Label>
                                Child
                            </Form.Label>
                            <Form.Control type="number" onChange={handleChild} required />
                        </Col>
                        <Col sm="6" className="mb-1">
                            <Form.Label>
                                Room
                            </Form.Label>
                            <Form.Select onChange={handleRoom} required>
                                <select>Select room</select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                        <Col sm="6" className="mb-1">
                            <Form.Label>
                                Night
                            </Form.Label>
                            <Form.Select onChange={handleNight} required>
                                <option>Select night</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                        <Col sm="6" className="d-none">
                            <Form.Label>
                                Order
                            </Form.Label>
                            <Form.Select onChange={handleOrder} >
                                <option value="Procecing">Procecing</option>
                                <option value="Packaging">Packaging</option>
                                <option value="Cancelling">Cencel</option>
                                <option value="Place Order">Place Order</option>
                            </Form.Select>
                        </Col>
                        <Col sm="6" className="mb-1">
                            <Form.Label>
                                Guide
                            </Form.Label>
                            <Form.Select onChange={handleGuide} required>
                                {
                                    allGuides.map(gd => <option key={gd._id} value={gd.name}>{gd.name}</option>)
                                }
                            </Form.Select>
                        </Col>
                        <Col sm="6" className="mb-1">
                            <Form.Label>
                                Total Price
                            </Form.Label>
                            <h5 className="border border-2 p-1 text-center">${price}</h5>
                        </Col>
                    </Form.Group>

                    <Col xs="12" className="my-1">
                        <Button type="submit" className="w-100 py-2 btn-danger bookNowbtn">Book Now <i className="fas fa-arrow-right"></i>
                        </Button>
                    </Col>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default BookNow;