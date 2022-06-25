import React, { useMemo, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

interface Props {
    children: JSX.Element
};

export default function AuthProvider({ children }: Props) {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const state = useMemo(() => ({
        isLogged: isLogged,
    }), [isLogged]);

    return (
        <AuthContext.Provider value={state} >
            {children}
        </AuthContext.Provider>
    )
}
