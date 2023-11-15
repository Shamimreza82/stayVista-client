import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useAuth()

    if(loading){
        return <Loader></Loader>
    }

    if(user?.email){
        return children
    }

    return <Navigate state={{from: location}} replace to='/login'></Navigate>
};

export default PrivateRoute;