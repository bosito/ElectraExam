import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

interface Props {
    title: string;
}

export default function Navbar(props: Props) {
    const { title } = props;
    const { isLogged, signOut } = useAuth();
    return (
        <div className='navbar navbar-dark bg-dark mb-4 px-4 ' >
            <h1 className='text-light' >{title}</h1>
            {
                isLogged ?
                    <div className='flex-row mb-3' >
                        <Button onClick={signOut} >
                            Cerra sesión
                        </Button>
                        <Link to='/employees' >
                            <Button className='ms-1' >
                                Empleados
                            </Button>
                        </Link>
                        <Link to='/calendar' >
                            <Button className='ms-1' >
                                Calendario
                            </Button>
                        </Link>
                    </div>

                    :
                    <Link to='/login' >
                        <Button >
                            login
                        </Button>
                    </Link>

            }
        </div>
    )
}
