import React from "react";
import { CitySoldiersInput } from "./CitySoldiersInput";
import { useSendSoldiers } from "../../../../hooks/useSendSoldiers";

interface Props {
    openModal: () => void;
    closeModal: () => void;
    isModalOpen: boolean;
    governor: string;
    name: string;
    id: number;
    onCityUpdated: () => void;
}

export const CityFormModal: React.FC<Props> = ({
    isModalOpen,
    openModal,
    closeModal,
    governor,
    name,
    id,
    onCityUpdated,
}) => {
    const {
        errors,
        soldiersAmount,
        setSoldiersAmount,
        successMessage,
        handleSubmit,
    } = useSendSoldiers({
        id,
        onSuccess: () => {
            onCityUpdated();
            closeModal();
        },
    });

    return (
        <>
            {" "}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl mb-5 text-center">
                            Province {name}
                        </h2>
                        <p>
                            Province governor: &nbsp;
                            {governor ? governor : " City has no governor."}
                        </p>

                        {/*Send soldiers to the city*/}
                        <form onSubmit={handleSubmit}>
                            <CitySoldiersInput
                                soldierCount={soldiersAmount}
                                setSoldierCount={setSoldiersAmount}
                                errors={errors}
                            />
                            <p>Send soldiers to city</p>
                            <button
                                type="submit"
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Send
                            </button>
                            <button
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={closeModal} // Close modal on click
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
