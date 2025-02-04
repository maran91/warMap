import React, { ChangeEvent } from "react";
import { AuthSignupErrorsType } from "../../../types/auth.type";
import { InputText } from "primereact/inputtext";

interface Props {
    email: string;
    setEmail: (value: string) => void;
    isEmailValid: boolean;
    setIsEmailValid: (value: boolean) => void;
    errors: AuthSignupErrorsType;
}

export const EmailInput: React.FC<Props> = ({
    email,
    setEmail,
    errors,
    isEmailValid,
    setIsEmailValid,
}) => {
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(/^\S+@\S+\.\S+$/.test(value));
    };
    return (
        <div className="field mb-4">
            <InputText
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                ${errors.errors?.email ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : isEmailValid ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500"}`}
            />
            {errors.errors?.email && (
                <p className="mt-2 text-sm text-red-600">
                    {errors.errors.email[0]}
                </p>
            )}
            {!errors.errors?.email && !isEmailValid && (
                <p className="mt-2 text-sm text-red-600">
                    Please enter a valid email address.
                </p>
            )}
        </div>
    );
};
