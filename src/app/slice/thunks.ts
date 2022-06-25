import { startLoading, closeLoading, setAddEmpleados } from './employeesSlice';

export const getEmpleados = () => {
    return async (dispatch: (colbak: any) => {}, getState: any) => {
        dispatch(startLoading());

        //dispatch(setAddEmpleados());
        dispatch(closeLoading());
        
    }
}