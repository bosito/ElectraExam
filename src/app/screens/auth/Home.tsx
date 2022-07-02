import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Lottie from 'lottie-react-web';
import animation from '../../../assets/lottie/9757-welcome.json';
import Navbar from '../../components/Navbar';
import './home.css';

export default function Home() {
    const { isLogged, signOut } = useAuth();
    const [pause, setPause] = useState<boolean>(false);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setPause(true);
        }, 5000);

        return () => clearTimeout(timeout);

    }, []);

    return (
        <div>
            <Navbar title='Home' />
            <div className='container text-center' >
                <div className='shadow-card card mt-5' >
                    <Lottie
                        style={{ cursor: 'default' }}
                        height={350}
                        width={450}
                        isPaused={pause}
                        options={{
                            animationData: animation,
                            loop: true
                        }}
                    />
                </div>


            </div>
        </div>

    );
};