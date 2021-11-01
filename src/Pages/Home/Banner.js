import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Container fluid className="p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>France</p>
                        <h3>Magnificent Paris</h3>
                        <p>Recognizable, lovely, passionate and forever yours…</p>
                        <Link to="/package/617e5246b9ed307642bdf276">
                            <Button>DisCover Paris</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-04.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>England</p>
                        <h3>Theatrical London</h3>
                        <p>From history and culture to fine food and good times…</p>
                        <Link to="/package/617e4fadb9ed307642bdf26f">
                            <Button>DisCover London</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>UNITED STATES</p>
                        <h3>Irresistible New York</h3>
                        <p>New York City wears many crowns, and spreads an irresistible feast for all.</p>
                        <Link to="/package/617e5010b9ed307642bdf270">
                            <Button>DisCover New York</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;