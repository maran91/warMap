import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import LoginPage from './views/pages/authentication/LoginPage';
import ProtectedRoute from './views/components/ProtectedRoute';
import SignupPage from "./views/pages/authentication/SignupPage";
import './App.css';
import {HomePage} from "./views/pages/home/HomePage";

const App: FC = () => {
    return (<AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/" element={<LoginPage/>}/>
                <Route
                    path="/home"
                    element={<ProtectedRoute>
                        <HomePage/>
                    </ProtectedRoute>}
                />
            </Routes>
        </AuthProvider>);
};

export default App;
