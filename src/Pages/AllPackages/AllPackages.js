import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UsePackage from '../../Hooks/UsePackage';
import Package from './Package';
import "./packages.css";

const AllPackages = () => {
    const packages = UsePackage();

    return (
        <Container>
            <h1 className="text-center">Explore all Packages</h1>
            <Row lg={3} sm={1} className="g-3 mb-3">
                {
                    !packages ?
                        <div className="d-flex justify-content-center align-items-center p-5">
                            <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> : packages.map(pd =>
                            <Package
                                key={pd._id}
                                pd={pd}
                            />
                        )

                }
            </Row>
        </Container>
    );
};

export default AllPackages;