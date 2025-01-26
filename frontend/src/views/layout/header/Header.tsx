import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { UserResources } from "../../../types/userResources.type";
import { Button } from "primereact/button";
import { useUserResources } from "../../../context/UserResourcesContext";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    const { userResources }: { userResources: UserResources | null } =
        useUserResources();
    const { logout } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <div className={className}>
            {userResources?.resources.map((userResource) => (
                <h4
                    className="text-red-800 text-2xl font-bold"
                    key={userResource.id}
                >
                    {userResource.resource_name}: {userResource.quantity}
                </h4>
            ))}
            {userResources?.units.map((userResource) => (
                <h4
                    className="text-red-800 text-2xl font-bold"
                    key={userResource.id}
                >
                    {userResource.unit_name}: {userResource.quantity}
                </h4>
            ))}
            <Button
                label="Logout"
                className="p-button bg-black font-bold hover:bg-red-700 text-white py-2 px-4 rounded text-center"
                onClick={handleLogout}
            />
        </div>
    );
};
