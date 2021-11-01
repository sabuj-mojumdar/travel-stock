import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseGuide from '../../Hooks/UseGuide';

const PopularGuide = () => {
    const { allGuides } = UseGuide();
    const sliceGuide = allGuides.slice(0, 6);

    return (
        <Container className="text-center my-5">
            <p className="text-danger p-0">POPULAR GUIDE</p>
            <h1>Dedicated Guide</h1>
            <Row lg={3}>
                {
                    sliceGuide.map(guide =>
                        <Col key={guide._id}>
                            <Card>
                                <Card.Body>
                                    <img className="guide-img" src={guide.photo} alt="guide" />
                                    <h4>{guide.name}</h4>
                                    <div className="d-flex justify-content-between">
                                        <p>Hire: {guide.hire}</p>
                                        <p>Experience: {guide.exp} years</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Level: {guide.level}</p>
                                        <p>Language: {guide.language}</p>
                                    </div>
                                    <Link to={`/hireguides/${guide._id}`}>
                                        <Button className="w-100 btn-danger">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default PopularGuide;