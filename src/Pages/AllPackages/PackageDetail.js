import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import BookNow from '../../Components/BookNow/BookNow';
import UseAuth from '../../Hooks/UseAuth';

const PackageDetail = () => {
    const { uid } = useParams();
    const [uniquePackage, setUniquePackage] = useState({});
    const { user } = UseAuth()



    useEffect(() => {
        fetch(`https://young-lowlands-26223.herokuapp.com/packages/${uid}`)
            .then(res => res.json())
            .then(data => setUniquePackage(data));
    }, [uid]);



    const banner = {
        backgroundImage: `linear-gradient(0deg, rgba(41, 29, 29, 0.3), rgba(7, 62, 94, 0.3)), url(${uniquePackage.imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white"
    };
    return (
        <div className="packge-details">
            <Row style={banner} >
                <div className="padding">
                    <div className="banner-title text-center">
                        <img className="user-img rounded-circle img-fluid" src={user.photoURL} alt="user" />
                        <p className="fs-2 mt-1 mb-0 fw-bold">{user.displayName}</p>
                        <p className="fs-4 m-0">{user.email}</p>
                    </div>
                </div>
            </Row>
            <Container>
                <Row className="my-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-evenly">
                            <div>
                                <h4 className="fw-bold">{uniquePackage.title}</h4>
                                <h3><span className="text-danger">Price: ${uniquePackage.price}</span></h3>
                            </div>
                        </div>
                        <div>
                            <Link to={`/addpackage`} className="my-auto mx-3"><Button className="btn btn-warning">Add a Package</Button></Link>
                            <Link to={`/update-package/${uid}`} className="my-auto"><Button className="btn btn-danger">Update Package</Button></Link>
                        </div>
                    </div>
                </Row>
                <hr />
                <Row className="g-3">
                    <Col lg={8}>
                        <Card className="mb-3">
                            <Card.Body>
                                <p><i className="far fa-star"></i> Overview</p>
                                <Row lg={3} className="g-3">
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <img width="40px" src="https://codeminifier.com/travel-stock-demo/assets/img/muscle.png" alt="mussule" />
                                                <span className="my-auto ps-3"> Gym & Fitness</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <img width="40px" src="https://codeminifier.com/travel-stock-demo/assets/img/wifi.png" alt="mussule" />
                                                <span className="my-auto ps-3"> Free Wifi</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <img width="40px" src="https://codeminifier.com/travel-stock-demo/assets/img/spa-waters.png" alt="mussule" />
                                                <span className="my-auto ps-3"> Free Spa</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <img width="40px" src="https://codeminifier.com/travel-stock-demo/assets/img/tea.png" alt="mussule" />
                                                <span className="my-auto ps-3"> Restaurent</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <img width="40px" src="https://codeminifier.com/travel-stock-demo/assets/img/parking.png" alt="mussule" />
                                                <span className="my-auto ps-3"> Parking On Site</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <img width="40px" src="https://codeminifier.com/travel-stock-demo/assets/img/poker.png" alt="mussule" />
                                                <span className="my-auto ps-3"> Casino</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className='mb-3'>
                            <Card.Body>
                                <div className="user-details">
                                    <p className="fw-bold"><i className='far fa-file'></i> Description</p>
                                </div>
                                <p className="justify">{uniquePackage?.description}</p>
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
                                        <i className="far fa-user rounded-circle icon-bg p-2"></i> 10k Hire
                                    </Col>
                                    <Col>
                                        <i className="far fa-clock rounded-circle icon-bg p-2"></i> 3 Years Exp.
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
                        {/* booknow */}
                        <BookNow />
                        <Card className="mb-3">
                            <Card.Body>
                                <p className='fw-bold'>Share Now</p><hr />
                                <Row xs={2} className="g-3">
                                    <Col>
                                        <i className="fab fa-facebook rounded-circle icon-bg p-2"></i> Facebook
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

export default PackageDetail;