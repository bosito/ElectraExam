import { createContext } from 'react';
import { AuthDateParams } from '../providers/AuthProvider';

interface AuthContextType {
    isLogged: boolean
    authDate: AuthDateParams,
    signIn: (user: AuthDateParams) => void;
    signOut: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;