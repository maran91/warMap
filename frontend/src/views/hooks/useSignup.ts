import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ColorOption } from "../../types/ColorOption.type";
import { AuthSignupErrorsType, NewUser } from "../../types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { authenticationService } from "../../api/authentication/authentication.service";

export const useSignup = () => {
    const navigate = useNavigate();

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [color, setColor] = useState<ColorOption | null>(null);
    const [username, setUsername] = useState("");

    // Valitation state
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<AuthSignupErrorsType>({});
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    // API mutation
    const { mutate } = useMutation({
        mutationFn: (newUser: NewUser) =>
            authenticationService.createAccount(newUser),
        onSuccess: () => {
            setSuccessMessage("Account successfully created");
            navigate("/login", {
                state: {
                    message: "Account created successfully! Please log in",
                },
            });
            setErrors({});
        },
        onError: (error: AuthSignupErrorsType) => {
            setErrors(error);
            setSuccessMessage(null);
        },
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            username: username,
            color: color,
            password: password,
            password_confirmation: passwordConfirmation,
        };
        mutate(newUser);
    };

    const navigateToLogin = () => navigate("/login");

    return {
        // Form state
        name,
        setName,
        email,
        setEmail,
        username,
        setUsername,
        color,
        setColor,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,

        // Valitation state
        successMessage,
        errors,
        isEmailValid,
        setIsEmailValid,

        // Handlers
        handleSubmit,
        navigateToLogin,
    };
};
