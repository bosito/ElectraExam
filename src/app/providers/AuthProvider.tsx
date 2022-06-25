import React, { useMemo, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

interface Props {
    children: JSX.Element
};

export interface AuthDateParams {
    nombre: string;
    contraseña: string;
}



export default function AuthProvider({ children }: Props) {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [authDate, setAuthDate] = useState<AuthDateParams>({ nombre: '', contraseña: '' });

    useEffect(() => {

        const isAuthdate = localStorage.getItem('AUTH_DATE');

        if (isAuthdate) {
            const dataStorage = JSON.parse(isAuthdate);
            setAuthDate(dataStorage);
            setIsLogged(true);
        };

    }, []);

    const signIn = (user: AuthDateParams) => {
        const dataStorage = JSON.stringify(user);
        localStorage.setItem("AUTH_DATE", dataStorage);
        setAuthDate(user);
        setIsLogged(true);
    };

    const signOut = () => {
        localStorage.removeItem('AUTH_DATE');
        setAuthDate({ contraseña: '', nombre: '' });
        setIsLogged(false);
    };

    const state = useMemo(() => ({
        isLogged: isLogged,
        authDate: authDate,
        signIn: signIn,
        signOut: signOut
    }), [isLogged, authDate]);

    return (
        <AuthContext.Provider value={state} >
            {children}
        </AuthContext.Provider>
    )
}
