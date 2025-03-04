import { CityNameInput } from "./CityNameInput";
import React from "react";
import { Button } from "primereact/button";
import { useCityDetailsUpdate } from "../../../hooks/useCityDetailsUpdate";

interface Props {
    cityName: string;
    initialCityId: number;
    onCityNameUpdated: () => void;
}

export const CityDetailsForm: React.FC<Props> = ({
    cityName,
    onCityNameUpdated,
    initialCityId,
}) => {
    const { newName, setNewName, errors, success, handleSubmit } =
        useCityDetailsUpdate({
            initialCityId,
            onSuccess: () => {
                onCityNameUpdated();
            },
        });
    console.log("Errors in form: ", errors);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CityNameInput
                    cityName={newName}
                    setCityName={setNewName}
                    errors={errors}
                />
                <Button
                    type="submit"
                    label="Change name"
                    className="p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                />
            </form>
        </>
    );
};
