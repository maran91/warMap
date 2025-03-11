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
                className="m-1 bg-secondary-100 rounded-lg "
            >
                <ProvinceNameInput
                    provinceName={newName}
                    setProvinceName={setNewName}
                    errors={errors}
                />
                <Button
                    type="submit"
                    label="Change name"
                    className=" p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                />
            </form>
        </>
    );
};
