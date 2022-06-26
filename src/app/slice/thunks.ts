import { startLoading, setAddEmpleados } from './employeesSlice';
import axios from 'axios';

export const getEmpleados = (userName: string) => {
    return async (dispatch: (colbak: any) => {}) => {
        dispatch(startLoading());

        const response = await axios.get(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/${userName}`);

        if(response.data){
            dispatch(setAddEmpleados(response.data.data.employees));
        };
    }
}