import React, { ChangeEvent, FC, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import {
    AuthLoginErrorsType,
    AuthResponseType,
    LoginUserType,
} from "../../../types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { authenticationService } from "../../../api/authentication/authentication.service";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState<string | null>(
        location.state?.message || null,
    );
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [Errors, setErrors] = useState<AuthLoginErrorsType>({});
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const { mutate } = useMutation({
        mutationFn: (user: LoginUserType) => authenticationService.login(user),
        onSuccess: (data: AuthResponseType) => {
            login(data.user, data.token);
            setErrors({});
        },
        onError: (error: AuthLoginErrorsType) => {
            setErrors(error);
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
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        if (isEmailValid) {
            const user: LoginUserType = {
                email: email,
                password: password,
            };
            mutate(user);
        }
    };
    const navigateToSignup = () => {
        navigate("/signup");
    };
    return (
        <div className="flex flex-col items-center justify-center p-12 md:mx-14 lg:p-16 xl:p-20 text-center">
            <h2 className="text-3xl mb-6">Login</h2>
            {message && <p className="text-green-600 mb-4">{message}</p>}
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="field mb-4">
                    <InputText
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                            ${Errors.errors?.email ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : isEmailValid ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500"}`}
                    />
                    {Errors.errors?.email && (
                        <p className="mt-2 text-sm text-red-600">
                            {Errors.errors.email[0]}
                        </p>
                    )}
                    {!Errors.errors?.email && !isEmailValid && (
                        <p className="mt-2 text-sm text-red-600">
                            Please enter a valid email address.
                        </p>
                    )}
                </div>
                <div className="field mb-4">
                    <InputText
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                            ${Errors.errors?.password ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    />
                    {Errors.errors?.password && (
                        <p className="mt-2 text-sm text-red-600">
                            {Errors.errors.password[0]}
                        </p>
                    )}
                </div>
                <div className="field cent">
                    <Button
                        type="submit"
                        label={"LoginPage"}
                        className="p-button bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mx-auto w-1/2 text-center"
                        disabled={!isEmailValid}
                    ></Button>
                </div>
            </form>
            <div className="mt-4">
                <Button
                    className="p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mx-auto  text-center"
                    onClick={navigateToSignup}
                >
                    Navigate to signup
                </Button>
            </div>
            {!Errors.errors && Errors.message && (
                <p className="mt-4 text-red-600">{Errors.message}</p>
            )}
        </div>
    );
};

export default LoginPage;
