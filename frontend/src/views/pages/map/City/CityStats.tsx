import React from "react";

interface Props {
    governor: string;
}

export const CityStats: React.FC<Props> = ({ governor }) => {
    return (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 p-2 text-center text-white transition-all duration-300">
            <div className="text-sm font-mono font-bold my-1 animate-fade-in delay-75">
                <p>governor: </p>
                <p>{governor}</p>
            </div>
        </div>
    );
};
