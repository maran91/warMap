import React from "react";
import { useNavigate } from "react-router-dom";

interface NavItem {
    label: string;
    path?: string;
    subItems?: NavItem[];
}

interface NavBarProps {
    className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
    const navigate = useNavigate();

    const items: NavItem[] = [
        {
            label: "Economy",
            subItems: [
                { label: "Discover", path: "/economy/discover" },
                { label: "Crew", path: "/economy/crew" },
            ],
        },
        {
            label: "Warfare",
            subItems: [
                { label: "Recruitment", path: "/warfare/Recruitment" },
                { label: "Map", path: "/warfare/map" },
                { label: "Provinces", path: "/warfare/provinces" },
            ],
        },
        {
            label: "Seaded",
            subItems: [{ label: "Profile", path: "/settings/profile" }],
        },
    ];

    const handleItemClick = (item: NavItem) => {
        if (item.path) {
            navigate(item.path);
        }
    };

    return (
        <div className={`w-full h-full ${className}`}>
            <nav className="bg-charcoal-black p-4 text-white ">
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li key={item.label} className="relative">
                            <div className="w-full px-12 py-2 text-center font-bold">
                                {item.label}
                            </div>
                            {item.subItems && (
                                <ul className="bg-charcoal-black mt-2 font-bold rounded-md space-y-2 p-2">
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.label}>
                                            <button
                                                onClick={() =>
                                                    handleItemClick(subItem)
                                                }
                                                className=" shadow-lg w-full px-4 text-light-gray py-2 text-center hover:text-white hover:bg-muted-gold hover:border-white border-4 rounded-full border-steel-gray"
                                            >
                                                {subItem.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
