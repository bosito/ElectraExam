import { createContext } from 'react';

interface InitialState {
    isLogged: boolean
}

const initialState: InitialState = {
    isLogged: false
};

const AuthContext = createContext(initialState);

export default AuthContext;