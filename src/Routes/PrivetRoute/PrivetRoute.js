import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </div>
    );
};

export default PrivetRoute;