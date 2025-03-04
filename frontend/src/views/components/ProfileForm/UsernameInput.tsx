import React, { ChangeEvent } from "react";
import { InputText } from "primereact/inputtext";
import { SignupResponseError } from "../../../types/auth.type";

interface Props {
    username: string;
    setUsername: (username: string) => void;
    errors: SignupResponseError;
}

export const UsernameInput: React.FC<Props> = ({
    username,
    setUsername,
    errors,
}) => {
    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    return (
        <div className="field mb-4">
            <InputText
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
                className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                            ${errors.errors?.username ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
            />
            {errors.errors?.username && (
                <p className="mt-2 text-sm text-red-600">
                    {errors.errors.username[0]}
                </p>
            )}
        </div>
    );
};
