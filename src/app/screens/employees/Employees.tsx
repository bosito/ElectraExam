import { useState, useEffect } from 'react';
import { Button, Table, Form, Pagination, Spinner, Modal } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getEmpleados } from '../../slice/thunks';
import { filterEmpleados } from '../../slice/employeesSlice';
import useAuth from '../../hooks/useAuth';
import './employess.css';


export default function Employees() {
    const { signOut, authDate } = useAuth();
    const [search, setSearch] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    const isLoading = useAppSelector((state) => state.employees.isLoading);
    const employessFilterList = useAppSelector((state) => state.employees.employess_filter_list);
    //const employessList = useAppSelector((state) => state.employees.employess_list);

    //stado del modal lo are con useState a falta de tiempo lo correcto es hacerlo con redux ya implentado
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cumple, setCumple] = useState('');

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getEmpleados(authDate.nombre))
    }, []);

    useEffect(() => {
        dispatch(filterEmpleados(search))
    }, [search]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            // const data = {
            //     name: 'Jose Luis',
            //     last_name: 'jimenez Vazquez',
            //     birthday: new Date()
            // };

            const data = {
                name: nombre,
                last_name: apellido,
                birthday: cumple
            };

            //en ocaciones esto ya esta validado por el api esto solo fue una prueba
            //const dateJson = JSON.stringify(data);

            const response = await axios.post(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/${authDate.nombre}`, data);

            console.log('response -->', response)

            if (response.data) {
                dispatch(getEmpleados(authDate.nombre));
                setNombre('');
                setApellido('');
                setCumple('');
                setOpenModal(false)
            };



        } catch (error) {
            console.log(error);
            //lo pondre a qui para simular lo que aria si el post es correcto
            dispatch(getEmpleados(authDate.nombre));
            setNombre('');
            setApellido('');
            setCumple('');
            setOpenModal(false);
        };
    };

    return (
        <div className='container' style={{ backgroundColor: undefined }} >
            <h1>Empleados</h1>
            <div className='d-flex flex-row mb-2 justify-content-between' >
                <div className='flex-row mb-2' >
                    <Button onClick={signOut} >
                        Cerrar sesión
                    </Button>
                    <Link to='/' >
                        <Button className='ms-1' >
                            Regresar al menú
                        </Button>
                    </Link>
                </div>
                <Button onClick={() => setOpenModal(true)} >
                    Agregar Empleado
                </Button>
            </div>

            <Form.Control
                type="text"
                className='mt-4'
                placeholder="Buscar..."
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
            />

            <div className='coun-table mt-3' >
                {
                    isLoading ?
                        <div className='d-flex  center-flex' >
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        employessFilterList.length > 0 ?
                            <Table striped bordered hover  >
                                <thead className='title-sticky' >
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Cumpleaños</th>
                                    </tr>
                                </thead>
                                {
                                    employessFilterList.map((item, index) => {
                                        const { birthday, last_name, name } = item;
                                        const fecha = new Date(birthday)
                                        const cumple = `${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`
                                        return (
                                            <tbody key={index.toString()} >
                                                <tr>
                                                    <td> {name} </td>
                                                    <td> {last_name} </td>
                                                    <td> {cumple} </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </Table>
                            :
                            <h3>No se encontró a {search}</h3>
                }

            </div>
            <Pagination className='d-flex align-items-center justify-content-center'>
                <Pagination.Prev />
                {
                    (() => {
                        let items = [];
                        for (let number = 1; number <= 5; number++) {
                            items.push(
                                <Pagination.Item key={number} //active={number === active}
                                >
                                    {number}
                                </Pagination.Item>,
                            );
                        }

                        return items
                    })()
                }
                <Pagination.Next />
            </Pagination>

            <Modal show={openModal} onHide={() => setOpenModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Empleado</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                maxLength={30}
                                required={true}
                                value={nombre}
                                onChange={(event) => setNombre(event.currentTarget.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contaseña">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apellidos"
                                maxLength={30}
                                required={true}
                                value={apellido}
                                onChange={(event) => setApellido(event.currentTarget.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contaseña">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control
                                type="date"
                                required={true}
                                value={cumple}
                                onChange={(event) => setCumple(event.currentTarget.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setOpenModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </div>
    );
};
