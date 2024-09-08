import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import Login from './views/pages/authentication/Login';
import ProtectedRoute from './views/components/ProtectedRoute';
import Signup from "./views/pages/authentication/Signup";
import './App.css';
import {Home} from "./views/pages/home/Home";

const App: FC = () => {
    return (<AuthProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Login/>}/>
                <Route
                    path="/home"
                    element={<ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>}
                />
            </Routes>
        </AuthProvider>);
};

export default App;
