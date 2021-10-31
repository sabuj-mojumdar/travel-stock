import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UsePackage from "../../Hooks/UsePackage";
import Package from "../AllPackages/Package";

const HomePackage = () => {
    const packages = UsePackage();
    const slicePackage = packages.slice(0, 5);

    return (
        <Container>
            <Row lg={3} className="g-3 my-3">
                {
                    slicePackage.map(pd =>
                        <Package
                            key={pd._id}
                            pd={pd}
                        />)
                }
                <div className="text-center m-auto">

                    <Link to="/allpackages">
                        <Button className="btn-success">See All Packages</Button>
                    </Link>
                </div>
            </Row>
        </Container>
    );
};

export default HomePackage;