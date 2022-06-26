import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useLocation, Navigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AuthDateParams } from '../../providers/AuthProvider';

const fakeFech = (user: AuthDateParams) => {
    return new Promise<{ data: AuthDateParams }>((resolve) =>
        setTimeout(() => resolve({ data: user }), 1000)
    );
};

export default function Login() {
    const { signIn, isLogged } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('12345678');
    const [loading, setLoading] = useState(false);

    if (isLogged) {
        //const from: any = location.state.from.pathname ? location.state.from.pathname : '';
        return <Navigate to='/employees' state={{ from: location }} replace={false} />;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

            const fakelogin = {
                contraseña: '12345678'
            };

            const data: AuthDateParams = {
                nombre: userName,
                contraseña: password
            };

            if (fakelogin.contraseña === data.contraseña) {
                setLoading(true);
                const response = await fakeFech(data);

                if (response.data) {
                    setLoading(false);
                    signIn(response.data);
                    navigate('/employees', { replace: true });
                };
            };
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <div className='container d-flex full  center-flex' >

            <div className='d-inline-flex card_login ' >
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="nombre"
                            required={true}
                            value={userName}
                            maxLength={30}
                            onChange={(event) => setUserName(event.currentTarget.value)}
                            onCopy={(e)=>{e.preventDefault()}}
                            onPaste={(e)=>{e.preventDefault()}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contaseña">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            required={true}
                            maxLength={30}
                            value={password}
                            onChange={(event) => setPassword(event.currentTarget.value)}
                            onCopy={(e)=>{e.preventDefault()}}
                            onPaste={(e)=>{e.preventDefault()}}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"

                    >
                        {loading ? <Spinner animation="border" variant="light" size='sm' /> : 'login'}
                    </Button>
                </Form>
            </div>

        </div>
    )
}