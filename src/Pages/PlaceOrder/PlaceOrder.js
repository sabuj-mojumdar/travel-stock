import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseBook from '../../Hooks/UseBook';
// import UseOrder from '../../Hooks/UseOrder';
import "./placeOrder.css";

const PlaceOrder = () => {
    const { user } = UseAuth();
    const { ubook } = UseBook();
    // const { orders } = UseOrder();

    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    // console.log(orders.length);

    const handleAddress = e => {
        setAddress(e.target.value);
    }
    const handleZipCode = e => {
        setZipCode(e.target.value);
    }
    const name = user.displayName;
    const email = user.email;
    const id = ubook._id;

    const handleAddOrder = () => {
        const data = { name, email, address, zipCode, id };
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || `/updateorder/${ubook._id}`;
    const handlePlaceOrder = (e) => {
        const proceed = window.confirm("Your Order is Successfully procced. Do you Want to complete your Order?");
        if (proceed) {
            handleAddOrder();
            e.preventDefault();
            history.push(redirect_url);
        }
    }



    return (
        <div>
            <Container className="my-5">
                <h2>Your({user.displayName}) PlaceOrder</h2>
                <Form onSubmit={handlePlaceOrder} >
                    <Form.Group className="mb-3" >
                        <Form.Label>
                            Package id
                        </Form.Label>
                        <Form.Control type="text" placeholder="booking Id" value={ubook._id || ''} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>
                            User Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="User Name" value={user.displayName || ''} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>
                            UserEmail
                        </Form.Label>
                        <Form.Control type="text" placeholder="Package Email" value={user.email || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>
                            Address
                        </Form.Label>
                        <Form.Control type="text" onChange={handleAddress} placeholder="Add address" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>
                            Zip Code
                        </Form.Label>
                        <Form.Control type="zip" onChange={handleZipCode} placeholder="Zip code" />
                    </Form.Group>
                    <div className="text-center mb-5 mt-3">
                        <Button variant="danger" type="submit">
                            Place Order
                        </Button>
                    </div>
                </Form>


            </Container>
            {/* 
            <Container>

                <h2>Total Orders: </h2>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>address</th>
                            <th>zipCode</th>
                            <th>id</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map(od =>
                                <tr key={od._id}>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{od.address}</td>
                                    <td>{od.zipCode}</td>
                                    <td>
                                        <Button className="btn-danger">Delete</Button>
                                    </td>
                                </tr>
                            )
                        }



                    </tbody>
                </Table>

            </Container> */}
        </div>
    );
};

export default PlaceOrder;