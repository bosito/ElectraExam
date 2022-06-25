import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface Porps{
    children: JSX.Element
}

export default function RequireAuth({ children }: Porps) {
    const location = useLocation();
    const { isLogged } = useAuth();
 
    if (!isLogged) {
        return <Navigate to='/login' state={{ from: location  }} replace />
    };

    return children;
};
