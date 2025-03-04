import React from "react";
import { InputText } from "primereact/inputtext";
import { OwnedCitiesResponseError } from "../../../../types/map.type";

interface Props {
    cityName: string;
    setCityName: (name: string) => void;
    errors: OwnedCitiesResponseError;
}

export const CityNameInput: React.FC<Props> = ({
    cityName,
    setCityName,
    errors,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCityName(e.target.value);
    };
    console.log(errors.errors?.new_name);
    return (
        <div className="field mb-4">
            <InputText
                id="name"
                value={cityName}
                onChange={handleChange}
                placeholder="Name"
                className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                            ${errors.errors?.new_name ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
            />
            {errors.errors?.new_name && (
                <p className="mt-2 text-sm text-red-600">
                    {errors.errors.new_name[0]}
                </p>
            )}
        </div>
    );
};
