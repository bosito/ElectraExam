import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

export default function Employees() {
    const { signOut } = useAuth();
    return(
        <div  className='container' style={{ backgroundColor: 'red' }} >
            <h1>Empleados</h1>
            <Button onClick={signOut} >
                wolas
            </Button>
        </div>
    )
}