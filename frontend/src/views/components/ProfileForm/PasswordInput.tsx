import { InputText } from "primereact/inputtext";
import React, { ChangeEvent } from "react";
import { AuthSignupErrorsType } from "../../../types/auth.type";

interface Props {
    password: string;
    passwordConfirmation: string;
    setPassword: (newPassword: string) => void;
    setPasswordConfirmation: (newPassword: string) => void;
    errors: AuthSignupErrorsType;
}

export const PasswordInput: React.FC<Props> = ({
    password,
    passwordConfirmation,
    setPassword,
    setPasswordConfirmation,
    errors,
}) => {
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmationChange = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        setPasswordConfirmation(e.target.value);
    };

    return (
        <>
            <div className="field mb-4">
                <InputText
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                ${errors.errors?.password ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                />
                {errors.errors?.password && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.errors.password[0]}
                    </p>
                )}
            </div>

            <div className="field mb-4">
                <InputText
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={handlePasswordConfirmationChange}
                    placeholder="Confirm Password"
                    className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                ${errors.errors?.password ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                />
                {errors.errors?.password && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.errors.password[0]}
                    </p>
                )}
            </div>
        </>
    );
};
