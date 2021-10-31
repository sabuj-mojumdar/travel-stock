import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="pagenotFound">
            <div>
                <h1>this page is not found</h1>
                <h1 className="notFound">404 page</h1>
                <div className='text-center'>
                    <Link to="/">Back to Home page</Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;