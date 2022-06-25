import { useState, useEffect } from 'react';
import { Button, Table, Form, Pagination, Spinner } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import useAuth from '../../hooks/useAuth';
import './employess.css';

export default function Employees() {
    const { signOut } = useAuth();
    const [search, setSearch] = useState<string>('');

    const isLoading = useAppSelector((state) => {
        return state.employees.isLoading
    });
    const employessFilterList = useAppSelector((state) => state.employees.employess_filter_list);
    const employessList = useAppSelector((state) => state.employees.employess_list);

    const dispatch = useAppDispatch();


    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [search]);

    return (
        <div className='container' style={{ backgroundColor: undefined }} >
            <h1>Empleados</h1>
            <Button onClick={signOut} >
                Cerrar sesión
            </Button>

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
                        <div>
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Cumpleaños</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
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

        </div>
    )
}