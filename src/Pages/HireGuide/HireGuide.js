import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Guide from './Guide';
import "./hireguide.css";

const HireGuide = () => {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
        fetch("https://young-lowlands-26223.herokuapp.com/guides")
            .then(res => res.json())
            .then(data => {
                setGuides(data);
            });
    }, []);
    return (
        <div className="hire-guide">
            <div className="banner">
                <div className="banner-title text-center">
                    <h2 className="title fs-1 fw-bold">Hire Guide</h2>
                    <p className="fs-4 fw-bold"><Link to="/" className="homePage">Home</Link> | <Link to="hireguides" className="currentPage">Hire Guide</Link></p>
                </div>
            </div>
            <Container>
                <Row md={2} xs={1} lg={3} className="g-3 py-5 text">
                    {
                        guides.map(guide => <Guide
                            key={guide._id}
                            guide={guide}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HireGuide;