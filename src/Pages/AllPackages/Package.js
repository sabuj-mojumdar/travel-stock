import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, title, location, price, day, discount, imgUrl, description } = props.pd;
    const sliceDescription = description.slice(0, 90);
    return (
        <Col>
            <Card className="h-100">
                <Card.Body className="package h-100">
                    <span className="discount bg-danger p-1">Save {discount}%</span>
                    <Card.Img variant="top" className="pImage" src={imgUrl} />
                    <div className="d-flex justify-content-between">
                        <p className="text-primary"><i className="fas fa-map-marker-alt"></i> {location}</p>
                    </div>
                    <Card.Title className="text-center fw-bold">
                        <Link to={`/package/${_id}`} className="text-success text-decoration-none">{title}</Link>
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                        <p className="text fw-bold">{day} days</p>
                        <p className="fw-bold fs-4">From ${price}</p>
                    </div>
                    <div>
                        <p className='text-center'>{sliceDescription}</p>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="text-end">
                        <Link to={`/package/${_id}`}>
                            <Button className="btn-success w-100">Book and see details</Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Package;