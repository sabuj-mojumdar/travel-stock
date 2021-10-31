import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useLocation, useHistory, Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const PlaceOrder = () => {
    const { user } = UseAuth();

    const locationurl = useLocation();
    const history = useHistory();
    const redirect_url = locationurl.state?.from || `/allpackages`;

    const handlePlaceOrder = () => {
        const proceed = window.confirm("Your Order is Successfully procced. Do you Want to complete your Order?");
        if (proceed) {
            history.push(redirect_url);
        }
    }

    return (
        <Container className="my-5">
            <h2>Your({user.displayName}) PlaceOrder</h2>
            <Form onSubmit={handlePlaceOrder}>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        User Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="User Name" value={user.displayName} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        UserEmail
                    </Form.Label>
                    <Form.Control type="text" placeholder="Package Email" value={user.email} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Add address" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Zip Code
                    </Form.Label>
                    <Form.Control type="zip" placeholder="Zip code" />
                </Form.Group>
                <div className="text-center mb-5 mt-3">
                    <Button variant="danger" type="submit">
                        Place Order
                    </Button>
                </div>
            </Form>
            <div>
                <Link to="/bookings"><Button>Update Your Booking</Button></Link>
            </div>

        </Container>
    );
};

export default PlaceOrder;