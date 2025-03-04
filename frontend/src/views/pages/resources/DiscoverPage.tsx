import React from "react";
import { useDiscover } from "../../hooks/useDiscover";

export const DiscoverPage: React.FC = () => {
    const { handleDiscovery, sucsess, timeLeft, error } = useDiscover();
    return (
        <>
            <div className="flex flex-wrap gap-5 flex-col items-center h-full">
                <h1 className="text-center text-3xl mt-20 mb-6 text-light-gray font-bold">
                    Discover
                </h1>
                <p className="text-xl text-white m-50">
                    Embark on a mission to explore and clear the surrounding map
                    of foreign fighters.<br></br> Each square mile of cleared
                    land will generate 35 food to sustain your group.
                </p>
                <div className="flex flex-col space-x-4 items-center">
                    <button
                        className="m-3 p-button bg-dark-red-orange text-white rounded-md shadow-md hover:bg-olive-green hover:scale-105 font-bold py-2 px-4 text-center"
                        onClick={handleDiscovery}
                    >
                        Discover and clear
                    </button>
                    <p className="text-white">{sucsess}</p>
                    <p className="text-light-gray">
                        <p className="text-light-gray">
                            {timeLeft === 0
                                ? "Ready to Disccover."
                                : `${Math.floor(timeLeft / 60)} minutes ${timeLeft % 60} second left.`}
                        </p>
                    </p>
                </div>
            </div>
        </>
    );
};
