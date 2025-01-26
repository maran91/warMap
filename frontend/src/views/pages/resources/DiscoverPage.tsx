import React from "react";
import { useDiscover } from "../../hooks/useDiscover";

export const DiscoverPage: React.FC = () => {
    const { handleDiscovery, sucsess, timeLeft, error } = useDiscover();
    return (
        <>
            <h2 className="text-2xl font-bold"></h2>
            <h2 className="text-2xl font-bold"></h2>
            <div className="flex flex-col items-center h-full">
                <h1 className="text-4xl font-bold">Discover</h1>
                <p className="text-lg text-gray-500">
                    Embark on a mission to explore and clear the surrounding map
                    of foreign fighters. Each square mile of cleared land will
                    generate 35 food to sustain your group.
                </p>
                <p className="text-lg"> land cleared:</p>
                <div className="flex flex-col space-x-4 items-center">
                    <button
                        className="bg-gray-800 text-white px-4 justify-center py-2 rounded-lg"
                        onClick={handleDiscovery}
                    >
                        Discover and clear
                    </button>
                    <p>{sucsess}</p>
                    <p>{Math.floor(timeLeft / 60)} minutes left</p>
                    <p>{timeLeft % 60} second left</p>
                </div>
            </div>
        </>
    );
};
