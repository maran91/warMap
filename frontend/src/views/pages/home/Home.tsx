import { Button } from "primereact/button";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const navigateToLogin = () => {
        logout();
        navigate("/login");
    };
    return (
        <>
            <h1>Home page</h1>
            <Button
                className="p-button bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mx-auto  text-center"
                onClick={navigateToLogin}
            >
                Logout
            </Button>
        </>
    );
};
