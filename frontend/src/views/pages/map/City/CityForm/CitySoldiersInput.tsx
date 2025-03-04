import React, { ChangeEvent } from "react";
import { InputText } from "primereact/inputtext";

interface Props {
    soldierCount: number;
    setSoldierCount: (number: number) => void;
    errors: any;
}

export const CitySoldiersInput: React.FC<Props> = ({
    soldierCount,
    setSoldierCount,
    errors,
}) => {
    const handleCitySoldiers = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSoldierCount(Number(e.target.value));
    };
    return (
        <div className="field mb-4">
            <InputText
                id="soldierCount"
                type="number"
                value={soldierCount.toString()}
                onChange={handleCitySoldiers}
                placeholder="Number of Soldiers to send"
                className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                            ${errors.errors?.name ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
            />
            {errors.errors?.name && (
                <p className="mt-2 text-sm text-red-600">
                    {errors.errors.name[0]}
                </p>
            )}
        </div>
    );
};
