import React from "react";
import { useAuth } from "../../../context/AuthContext";

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    const { userResources } = useAuth();

    let foodAmount: number = 0;
    let territoryAmount: number = 0;
    if (userResources) {
        userResources.forEach((resource) => {
            if (resource.resource_name.toLowerCase() === "food") {
                foodAmount = resource.quantity;
            }
            if (resource.resource_name.toLowerCase() === "territory") {
                territoryAmount = resource.quantity;
            }
        });
    }

    return (
        <div className={className}>
            <h4 className="text-red-800 text-2xl font-bold">
                Food: {foodAmount}
            </h4>
            <h4 className="text-red-800 text-2xl font-bold">
                Territory: {territoryAmount}
            </h4>
        </div>
    );
};
