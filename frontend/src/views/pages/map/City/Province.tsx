import React, { useState } from "react";
import { CityStats } from "./CityStats";
import { ProvinceFormModal } from "./CityForm/ProvinceFormModal";

interface Props {
    name: string;
    governor: string;
    id: number;
    onCityUpdated: () => void;
}

export const Province: React.FC<Props> = ({
    name,
    governor,
    id,
    onCityUpdated,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex items-center">
            <div
                className="group relative  transition-all duration-300"
                style={{
                    width: "15vh",
                    height: "7.7vh",
                }}
                onClick={openModal}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Main Square Content */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                    <span
                        className={`text-white text-xs z-10 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                    >
                        {name}
                    </span>
                </div>

                {/* Overlay Component */}
                {isHovered && (
                    <div className="absolute inset-1 z-20">
                        <CityStats governor={governor} />
                    </div>
                )}

                {/* Background Animation Layer */}
                <div
                    className={`
          absolute inset-0 transition-all duration-300
          ${isHovered ? "bg-olive-green scale-110 z-10" : "bg-dark-green"}
        `}
                />
            </div>
            <ProvinceFormModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                openModal={openModal}
                governor={governor}
                name={name}
                id={id}
                onCityUpdated={onCityUpdated}
            />
        </div>
    );
};
