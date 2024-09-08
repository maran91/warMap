import React, { ChangeEvent, FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { authenticationService } from "../../../api/authentication/authentication.service";
import { AuthErrorsType, newUser } from "../../../types/auth.type";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import {useNavigate} from "react-router-dom";

const Signup: FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<AuthErrorsType>({});
    const [fieldErrors, setFieldErrors] = useState<AuthErrorsType>({});
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const { mutate } = useMutation({
        mutationFn: (newUser: newUser) =>
            authenticationService.createAccount(newUser),
        onSuccess: (data) => {
            setSuccessMessage("Account created successfully");
            navigate("/login", { state: { message: "Account created successfully! Please log in." } });
            setErrors({});
            setFieldErrors({});
        },
        onError: (error: AuthErrorsType) => {
            setErrors(error);
            if (error.general) {
                setFieldErrors({});
            } else {
                setFieldErrors(error);
            }

            setSuccessMessage(null);
        },
    });

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(/^\S+@\S+\.\S+$/.test(value));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmationChange = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        };
        mutate(newUser);
    };
    const navigateToLogin = () => {
        navigate("/login");
    }

    return (
        <div className="flex flex-col items-center justify-center text-center md:mx-14 lg:p-16 xl:p-20">
            <h2 className="text-3xl mb-6">Signup</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="field mb-4">
                    <InputText
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Name"
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                            ${fieldErrors.name ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    />
                    {fieldErrors.name && (
                        <p className="mt-2 text-sm text-red-600">
                            {fieldErrors.name[0]}
                        </p>
                    )}
                </div>

                <div className="field mb-4">
                    <InputText
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                ${fieldErrors.email ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : isEmailValid ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500"}`}
                    />
                    {fieldErrors.email && (
                        <p className="mt-2 text-sm text-red-600">
                            {fieldErrors.email[0]}
                        </p>
                    )}
                    {!fieldErrors.email && !isEmailValid && (
                        <p className="mt-2 text-sm text-red-600">
                            Please enter a valid email address.
                        </p>
                    )}
                </div>

                <div className="field mb-4">
                    <InputText
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                ${fieldErrors.password ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    />
                    {fieldErrors.password && (
                        <p className="mt-2 text-sm text-red-600">
                            {fieldErrors.password[0]}
                        </p>
                    )}
                </div>

                <div className="field mb-4">
                    <InputText
                        type="password"
                        id="password_confirmation"
                        value={password_confirmation}
                        onChange={handlePasswordConfirmationChange}
                        placeholder="Confirm Password"
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                ${fieldErrors.password ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    />
                    {fieldErrors.password && (
                        <p className="mt-2 text-sm text-red-600">
                            {fieldErrors.password[0]}
                        </p>
                    )}
                </div>
                <Button
                    type="submit"
                    label="Signup"
                    className="p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-1/2 text-center"
                />
                {successMessage && (
                    <p className="mt-4 text-green-600">{successMessage}</p>
                )}
                {errors.general && (
                    <p className="mt-4 text-red-600">{errors.general[0]}</p>
                )}
            </form>
            <div className="mt-4">
                <Button
                    className="p-button bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mx-auto  text-center"
                    onClick={navigateToLogin}
                >
                    Navigate to login
                </Button>
            </div>
        </div>
    );
};
export default Signup;
