import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Home.css";

const WorkingProcess = () => {
    return (
        <Container className="text-center my-5">
            <p className="text-danger p-0">WORKING PROCESS</p>
            <h1>How It Works?</h1>
            <Row lg={3} xs={1}>
                <Col className="text-center">
                    <img className="working" src="https://codeminifier.com/travel-stock-demo/assets/img/tour-1.png" alt="tour-1" />
                    <h5>Choose a Destination & Guide</h5>
                    <p>Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers.</p>
                </Col>
                <Col className="text-center">
                    <img className="working" src="https://codeminifier.com/travel-stock-demo/assets/img/tour-2.png" alt="tour-2" />
                    <h5>Choose your guide & Customize</h5>
                    <p>Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers.</p>
                </Col>
                <Col className="text-center">
                    <img className="working" src="https://codeminifier.com/travel-stock-demo/assets/img/tour-3.png" alt="tour-3" />
                    <h5>Book Your Guide Online</h5>
                    <p>Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkingProcess;