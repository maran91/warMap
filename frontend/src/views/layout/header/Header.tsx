import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { UserStats } from "../user-stats/UserStats";

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    const { logout } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    // hover:bg-red-700
    return (
        <div className={`${className} `}>
            <div className=" justify-end">
                <Button
                    label="Logout"
                    className="absolute top-2 right-4 p-2 font-bold bg-dark-red-orange text-white rounded-md shadow-md hover:bg-olive-green hover:scale-105 text-xl w-40 "
                    onClick={handleLogout}
                />
            </div>
            <UserStats />
        </div>
    );
};
