import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = UseAuth();
    if (isLoading) return <div className="d-flex justify-content-center align-items-center p-5">
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
    </div>;
    return (
        <Route

            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}></Redirect>}
        >

        </Route>

    );
};

export default PrivateRoute;