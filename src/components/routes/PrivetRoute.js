import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const PrivetRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext)
    if (loading) {
        return <div>loading...</div>
    }
    if (currentUser && currentUser.uid) {
        return children
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivetRoute;