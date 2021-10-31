import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <Container className="py-2 text-success border border-1 top-header" fluid>
            <Row md={2} lg={4} className="my-auto">
                <Col>
                    <div><i className="fas fa-map-marker-alt"></i> Banglabazar, Noakhali</div>
                </Col>
                <Col>
                    <div><i className="fas fa-phone"></i> any question: 01812-435207</div>
                </Col>
                <Col>
                    <div><i className="fas fa-envelope"></i> mojumdarnb@gmail.com</div>
                </Col>
                <Col>
                    <div>
                        <i className="fab fa-facebook btn-success p-2 rounded-circle me-2"></i>
                        <i className="fab fa-youtube btn-success p-2 rounded-circle me-2"></i>
                        <i className="fab fa-instagram btn-success p-2 rounded-circle me-2"></i>
                        <i className="fab fa-twitter btn-success p-2 rounded-circle me-2"></i>
                        <i className="fab fa-linkedin p-2 btn-success rounded-circle me-2"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopHeader;