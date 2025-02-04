import React from "react";

interface LoadingProps {
    isLoading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {

    if (!isLoading) {

        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="text-white text-2xl font-bold">Loading...</div>
        </div>
    );
};
