import AuthProvider from './AuthProvider';

interface Props {
    children: JSX.Element
};

/**
 * esta configuracion del context api de react permite tener un mejor orden de los diferentes 
 * providers
 * @function GlobalProvider 
 */

export default function GlobalProvider({ children }: Props) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}