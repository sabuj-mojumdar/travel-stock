import React from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import UseBook from '../../Hooks/UseBook';

const UpdateOrder = () => {
    const { ubook, handleUpdateOrder, handleUpdateBooking } = UseBook();
    return (
        <Container className="update-order">
            <Row>
                <Form onSubmit={handleUpdateBooking}>
                    <Form.Label>
                        Update Order
                    </Form.Label>
                    <Form.Select onChange={handleUpdateOrder} required value={ubook.order || ''}>
                        <option value="Procecing">Procecing</option>
                        <option value="Packaging">Packaging</option>
                        <option value="Cancelling">Cancelling</option>
                        <option value="Place Order">Place Order</option>
                    </Form.Select>
                    <Button className="mt-3" type="submit">Update Your Booking</Button>
                </Form>
            </Row>
        </Container>
    );
};

export default UpdateOrder;