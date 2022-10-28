import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const PrivetRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="min-h-screen"> <progress className="progress w-full"></progress></div>
    }
    if (currentUser && currentUser.uid) {
        return children
    }
    return <Navigate to={'/signin'} state={{ from: location }} replace></Navigate >
};

export default PrivetRoute;