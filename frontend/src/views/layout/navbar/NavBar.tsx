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
            label: "Majandus",
            subItems: [
                { label: "Avasta", path: "/majandus/avasta" },
                { label: "Kogukonna leht", path: "/majandus/kamp" },
            ],
        },
        {
            label: "Sõjandus",
            subItems: [
                { label: "Värbamine", path: "/sojandus/varbamine" },
                { label: "Kaart", path: "/sojandus/kaart" },
            ],
        },
        {
            label: "Seaded",
            subItems: [{ label: "Profiil", path: "/seaded/profiil" }],
        },
    ];

    const handleItemClick = (item: NavItem) => {
        if (item.path) {
            navigate(item.path);
        }
    };

    return (
        <div className={`w-full h-full ${className}`}>
            <nav className="bg-gray-800 p-4 text-white ">
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li key={item.label} className="relative">
                            <div className="w-full px-12 py-2 text-center font-bold">
                                {item.label}
                            </div>
                            {item.subItems && (
                                <ul className="bg-gray-800 mt-2 font-bold rounded-md shadow-lg space-y-2 p-2">
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.label}>
                                            <button
                                                onClick={() =>
                                                    handleItemClick(subItem)
                                                }
                                                className="w-full px-4 text-gray-400 py-2 text-center hover:text-white hover:bg-gray-600 hover:border-white border-4 rounded-full border-gray-500"
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
