import React from "react";
import { ProvinceSoldiersInput } from "./ProvinceSoldiersInput";
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

export const ProvinceFormModal: React.FC<Props> = ({
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
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-charcoal-black p-6 rounded-lg shadow-lg max-w-sm w-full text-light-gray"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl mb-5 text-center">
                            Province {name}
                        </h2>
                        <p>
                            Province governor: &nbsp;
                            {governor ? governor : " Province has no governor."}
                        </p>

                        <form onSubmit={handleSubmit}>
                            <ProvinceSoldiersInput
                                soldierCount={soldiersAmount}
                                setSoldierCount={setSoldiersAmount}
                                errors={errors}
                            />
                            <p>Send soldiers to province</p>
                            <p className="text-xl text-green-600 font-bold">
                                {successMessage}
                            </p>
                            <p className="text-xl text-red-600 font-bold">
                                {errors}
                            </p>
                            <button
                                type="submit"
                                className="mt-4 bg-dark-red-orange text-white px-4 py-2 rounded-md hover:scale-110 hover:bg-olive-green"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
