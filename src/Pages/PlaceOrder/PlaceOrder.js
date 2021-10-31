import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';

const PlaceOrder = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Card>
                        <Form >
                            <Form.Group className="mb-3" >
                                <Form.Label>
                                    Name
                                </Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>


                            <Col xs="12" className="my-1">
                                <Button type="submit" className="w-100 py-2 btn-danger bookNowbtn">Update <i className="fas fa-arrow-right"></i></Button>
                            </Col>
                        </Form>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;