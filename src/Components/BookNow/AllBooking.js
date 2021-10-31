import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseBook from '../../Hooks/UseBook';

const AllBooking = () => {
    const { user } = UseAuth();
    const { bookings, handleDeleteBooking } = UseBook();
    return (
        <Container>
            <h2>{user.displayName}, your order Here</h2>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Guide</th>
                        <th>CheckIn</th>
                        <th>CheckOut</th>
                        <th>Order</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(book =>
                            <tr key={book._id}>
                                <td>{book.guide}</td>
                                <td>{book.checkIn}</td>
                                <td>{book.checkOut}</td>
                                <td>{book.order}</td>
                                <td><Link to={`/updatebook/${book._id}`}><Button className="btn-success">Update</Button></Link></td>
                                <td>
                                    <Button onClick={() => handleDeleteBooking(book._id)} className="btn-danger">Delete</Button>
                                </td>
                            </tr>
                        )
                    }



                </tbody>
            </Table>

        </Container>
    );
};

export default AllBooking;