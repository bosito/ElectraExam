import { Routes, Route } from "react-router-dom";
import Error404 from './screens/Error404';
import Home from './screens/auth/Home';
import Login from './screens/auth/Login';
import Employees from './screens/employees/Employees';
import Upload from './screens/uploadFiles/Upload';
import RequireAuth from './screens/RequireAuth';
import Layaut from './screens/Layaut';

export default function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Layaut />}>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route
                    path='employees'
                    element={
                        <RequireAuth>
                            <Employees />
                        </RequireAuth>
                    }
                />
                <Route
                    path='upload'
                    element={
                        <RequireAuth>
                            <Upload />
                        </RequireAuth>
                    }
                />
            </Route>

            <Route path='*' element={<Error404 />} />
        </Routes>
    );
};

