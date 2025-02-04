import React, { ChangeEvent } from "react";
import { AuthSignupErrorsType } from "../../../types/auth.type";
import { InputText } from "primereact/inputtext";

interface Props {
    currentPassword: string;
    setCurrentPassword: (currentPassword: string) => void;
    errors: AuthSignupErrorsType;
}

export const CurrentPasswordInput: React.FC<Props> = ({
    currentPassword,
    setCurrentPassword,
    errors,
}) => {
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCurrentPassword(e.target.value);
    };
    return (
        <div className="field mb-4">
            <InputText
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={handlePasswordChange}
                placeholder="Current password"
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
