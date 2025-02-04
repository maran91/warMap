import React, { FC } from "react";
import { Button } from "primereact/button";
import {
    ColorSelect,
    EmailInput,
    NameInput,
    PasswordInput,
    UsernameInput,
} from "../../components/ProfileForm";
import { useSignup } from "../../hooks/useSignup";

const SignupPage: FC = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        color,
        setColor,
        username,
        setUsername,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        successMessage,
        errors,
        isEmailValid,
        setIsEmailValid,
        handleSubmit,
        navigateToLogin,
    } = useSignup();

    return (
        <div className="flex flex-col items-center justify-center text-center md:mx-14 lg:p-16 xl:p-20">
            <h2 className="text-3xl mb-6">Signup</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <NameInput name={name} setName={setName} errors={errors} />
                <EmailInput
                    email={email}
                    setEmail={setEmail}
                    isEmailValid={isEmailValid}
                    setIsEmailValid={setIsEmailValid}
                    errors={errors}
                />
                <UsernameInput
                    username={username}
                    setUsername={setUsername}
                    errors={errors}
                />
                <ColorSelect
                    color={color}
                    setColor={setColor}
                    errors={errors}
                />
                <PasswordInput
                    password={password}
                    passwordConfirmation={passwordConfirmation}
                    setPassword={setPassword}
                    setPasswordConfirmation={setPasswordConfirmation}
                    errors={errors}
                />
                <Button
                    type="submit"
                    label="Signup"
                    className="p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-1/2 text-center"
                />
                {successMessage && (
                    <p className="mt-4 text-green-600">{successMessage}</p>
                )}
                {!errors.errors && errors.message && (
                    <p className="mt-4 text-red-600">
                        {errors.message.map((item) => (
                            <div>item</div>
                        ))}
                    </p>
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
export default SignupPage;
