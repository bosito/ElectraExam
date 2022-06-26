import React from 'react';
import { Button, Table, Form, Pagination, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Lottie from 'lottie-react-web';
import animation from '../../../assets/lottie/9757-welcome.json';

export default function Home() {
    const { isLogged, signOut } = useAuth();
    return (
        <div className='container text-center' >
            <div className='d-flex flex-row mb-2 justify-content-between mt-3' >
                <h1>Home</h1>

                {
                    isLogged ?
                        <div className='flex-row mb-2' >
                            <Button onClick={signOut} >
                                Cerra sesión
                            </Button>
                            <Link to='/employees' >
                                <Button className='ms-1' >
                                    Empleados
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

            <Lottie
                height={400}
                width={400}
                options={{
                    animationData: animation,
                    loop: false
                }}
            />

        </div>
    )
}