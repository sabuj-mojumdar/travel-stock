import React from 'react';
import { Col, Container, Button, Row, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import UseGuide from '../../Hooks/UseGuide';

const GuideDetails = () => {
    const { uniqueGuide } = UseGuide();
    const { gid } = useParams();
    return (
        <div className="guide-details">
            <Container fluid className="p-0">
                <div className="banner text-white">
                    <div className="banner-title text-center">
                        <img className="user-img rounded-circle img-fluid" src={uniqueGuide?.photo} alt="user" />
                        <p className="fs-2 mt-1 mb-0 fw-bold">{uniqueGuide.name}</p>
                        <p className="fs-4 m-0">{uniqueGuide.area}</p>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="my-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-evenly">
                            <h4 className="fw-bold text pt-3"><i className="far fa-user"></i> Guide</h4>
                        </div>
                        <div>
                            <Link to={`/hireguides`} className="my-auto mx-2"><Button className="btn btn-success">All guides</Button></Link>
                            <Link to={`/updateguide/${gid}`} className="my-auto mx-2"><Button className="btn btn-warning">Update the guide</Button></Link>
                            <Link to={`/addguide`} className="my-auto"><Button className="btn btn-danger">Apply for a guide</Button></Link>
                        </div>
                    </div>
                </Row>
                <hr />
                <Row className="g-3">
                    <Col lg={8}>
                        <Card className="mb-3">
                            <Card.Body>
                                <div className="d-flex">
                                    <div className="my-auto">
                                        <img className="user-img rounded-circle mb-3 img-fluid" src={uniqueGuide.photo} alt="user" /><br />
                                        <Link to={`/updateguide/${gid}`}><Button> Update Profile</Button></Link>
                                    </div>
                                    <div className="ms-3">
                                        <h3>{uniqueGuide.name}<sup className="text-danger fw-bold">Guide</sup></h3>
                                        <p><span>{uniqueGuide.exp} Year Experience</span>
                                            <span className="bg-success py-1 px-2 ms-2 text-white">Online</span>
                                        </p>
                                        <p>{uniqueGuide.area}</p>
                                    </div>
                                </div>
                                <Row className="my-3 fw-bold">
                                    <span>Tour Type:
                                        <span className="btn-danger px-2 ms-3">Extraordinary</span>
                                        <span className="btn-warning ms-2 px-2">Food</span>
                                        <span className="btn-info ms-2 px-2">Travel</span>
                                    </span>
                                    <span>Active Lavel: <span className='text'>{uniqueGuide.level}</span></span>
                                    <span>Language: <span className='text'> {uniqueGuide.language}</span></span>
                                    <span>Location: <span className="text">{uniqueGuide.area}</span></span>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Card className='mb-3'>
                            <Card.Body>
                                <div className="user-details">
                                    <p className="fw-bold"><i className='far fa-file'></i> Description</p>
                                </div>
                                <p>{uniqueGuide.bio}</p>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                                <ul>
                                    <li className='fw-bold'> Extra Features</li>
                                    <li><i className="far fa-hand-point-right"></i> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                                    <li><i className="far fa-hand-point-right"></i> Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</li>
                                    <li><i className="far fa-hand-point-right"></i> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.</li>
                                    <li><i className="far fa-hand-point-right"></i> Pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes.</li>
                                    <li><i className="far fa-hand-point-right"></i> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                                    <li><i className="far fa-hand-point-right"></i> Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</li>
                                    <li><i className="far fa-hand-point-right"></i> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <p className='fw-bold'>Daniel Duke WarmTour <sup className='text-success'>Guide</sup></p><hr />
                                <Row xs={2} className="g-3">
                                    <Col>
                                        <i className="far fa-user rounded-circle icon-bg p-2"></i> {uniqueGuide.hire} Hire
                                    </Col>
                                    <Col>
                                        <i className="far fa-clock rounded-circle icon-bg p-2"></i> {uniqueGuide.exp} Years Exp.
                                    </Col>
                                    <Col>
                                        <i className="far fa-eye rounded-circle icon-bg p-2"></i> 3 785 view
                                    </Col>
                                    <Col>
                                        <i className="far fa-share-square rounded-circle icon-bg p-2"></i> 100 Share
                                    </Col>
                                    <Col>
                                        <i className="far fa-comments rounded-circle icon-bg p-2"></i> 100 Comments
                                    </Col>
                                    <Col>
                                        <i className="far fa-heart rounded-circle icon-bg p-2"></i> 20 Likes
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Body>
                                <p className='fw-bold'>Share Now</p><hr />
                                <Row xs={2} className="g-3">
                                    <Col>
                                        <Link to={uniqueGuide.facebook} className='text-decoration-none text-dark'><i className="fab fa-facebook rounded-circle icon-bg p-2"></i> Facebook
                                        </Link>
                                    </Col>
                                    <Col>
                                        <i className="fab fa-youtube rounded-circle icon-bg p-2"></i> Youtube
                                    </Col>
                                    <Col>
                                        <i className="fab fa-instagram rounded-circle icon-bg p-2"></i> Instagram
                                    </Col>
                                    <Col>
                                        <i className="fab fa-twitter rounded-circle icon-bg p-2"></i> Twitter
                                    </Col>
                                    <Col>
                                        <i className="fab fa-linkedin rounded-circle icon-bg p-2"></i> Linkedin
                                    </Col>
                                    <Col>
                                        <i className="fab fa-github rounded-circle icon-bg p-2"></i> Github
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GuideDetails;