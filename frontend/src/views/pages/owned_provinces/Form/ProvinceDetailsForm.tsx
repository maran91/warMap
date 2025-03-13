import { ProvinceNameInput } from "./ProvinceNameInput";
import React from "react";
import { Button } from "primereact/button";
import { useProvinceDetailsUpdate } from "../../../hooks/useProvinceDetailsUpdate";

interface Props {
    provinceName: string;
    initialProvinceId: number;
    onCityNameUpdated: () => void;
}

export const ProvinceDetailsForm: React.FC<Props> = ({
    provinceName,
    onCityNameUpdated,
    initialProvinceId,
}) => {
    const { newName, setNewName, errors, success, handleSubmit } =
        useProvinceDetailsUpdate({
            initialProvinceId,
            onSuccess: () => {
                onCityNameUpdated();
            },
        });
    console.log("Errors in form: ", errors);
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="m-2 bg-charcoal-black rounded-lg "
            >
                <ProvinceNameInput
                    provinceName={newName}
                    setProvinceName={setNewName}
                    errors={errors}
                />
                <Button
                    type="submit"
                    label="Change name"
                    className=" p-button bg-dark-red-orange hover:scale-105 hover:bg-olive-green text-white font-bold py-2 px-4 rounded"
                />
            </form>
        </>
    );
};
