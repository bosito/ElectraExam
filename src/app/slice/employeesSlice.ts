import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../interfaces/interfaces';

export interface CounterState {
    employess_list: Employee[];
    employess_filter_list: Employee[];
    isLoading: boolean
}

const initialState: CounterState = {
    employess_list: [],
    employess_filter_list: [],
    isLoading: true,
};


export const employessSlice = createSlice({
    name: 'employess',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        closeLoading: (state) => {
            state.isLoading = false
        },
        setAddEmpleados: (state, acction) => {
            console.log('acction --->', acction)
        }
    },

});

export const { startLoading, closeLoading, setAddEmpleados } = employessSlice.actions;


export default employessSlice.reducer;