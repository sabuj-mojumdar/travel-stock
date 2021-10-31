import React from 'react';
import Banner from './Banner';
import HomePackage from './HomePackage';
import PopularGuide from './PopularGuide';
import WorkingProcess from './WorkingProcess';

const Home = () => {
    return (
        <div>
            <Banner />
            <p className="text-center text-success fw-bold mt-3">Popular Travel Packages</p>
            <h4 className="text-center fw-bold">Featured Travel Packages</h4>
            <HomePackage />
            <WorkingProcess />
            <PopularGuide />
        </div>
    );
};

export default Home;