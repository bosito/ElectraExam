import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../interfaces/interfaces';

export interface CounterState {
    employess_list: Employee[];
    employess_filter_list: Employee[];
    isLoading: boolean,
    page: number;
}

const initialState: CounterState = {
    employess_list: [],
    employess_filter_list: [],
    isLoading: true,
    page: 1
};


export const employessSlice = createSlice({
    name: 'employess',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        setAddEmpleados: (state, acction) => {
            state.isLoading = false
            state.employess_filter_list = [...acction.payload]
            state.employess_list = [...acction.payload]
        },
        filterEmpleados: (state, acction) => {
            const listaAll = state.employess_list;

            const listafilter = listaAll.filter((empleado) => {
                return empleado.name.toLowerCase().indexOf(acction.payload) !== -1
                    || empleado.last_name.toLowerCase().indexOf(acction.payload) !== -1
                    || empleado.id.toString().indexOf(acction.payload) !== -1
            });

            state.employess_filter_list = listafilter;
        }
    },

});

export const { startLoading, setAddEmpleados, filterEmpleados } = employessSlice.actions;


export default employessSlice.reducer;