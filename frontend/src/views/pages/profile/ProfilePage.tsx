import React from "react";
import { Button } from "primereact/button";
import {
    ColorSelect,
    EmailInput,
    NameInput,
    PasswordInput,
    UsernameInput,
} from "../../components/ProfileForm";
import { useProfileUpdate } from "../../hooks/useProfileUpdate";
import { usePasswordUpdate } from "../../hooks/usePasswordUpdate";
import { CurrentPasswordInput } from "../../components/ProfileForm/CurrentPasswordInput";

export const ProfilePage: React.FC = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        username,
        setUsername,
        color,
        setColor,
        isEmailValid,
        setIsEmailValid,
        profileUpdateSuccessMessage,
        handleProfileUpdate,
        profileUpdateErrors,
    } = useProfileUpdate();
    const {
        currentPassword,
        newPassword,
        newPasswordConfirmation,
        setCurrentPassword,
        setNewPassword,
        setNewPasswordConfirmation,
        passwordUpdateErrors,
        passwordUpdateSuccessMessage,
        handlePasswordUpdate,
    } = usePasswordUpdate();
    return (
        <div className="flex flex-col items-center justify-center text-center md:mx-14 lg:p-16 xl:p-20">
            <h2 className="text-3xl mb-6">Profile </h2>
            <form onSubmit={handleProfileUpdate} className="w-full max-w-md">
                <NameInput
                    name={name}
                    setName={setName}
                    errors={profileUpdateErrors}
                />
                <EmailInput
                    email={email}
                    setEmail={setEmail}
                    isEmailValid={isEmailValid}
                    setIsEmailValid={setIsEmailValid}
                    errors={profileUpdateErrors}
                />
                <UsernameInput
                    username={username}
                    setUsername={setUsername}
                    errors={profileUpdateErrors}
                />
                <ColorSelect
                    color={color}
                    setColor={setColor}
                    errors={profileUpdateErrors}
                />
                <Button
                    type="submit"
                    label="Change details"
                    className="p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-1/2 text-center"
                />
            </form>
            {profileUpdateSuccessMessage && (
                <p className="mt-4 text-green-600">
                    {profileUpdateSuccessMessage}
                </p>
            )}
            {!profileUpdateErrors.errors && profileUpdateErrors.message && (
                <p className="mt-4 text-red-600">
                    {profileUpdateErrors.message.map((item) => (
                        <div>item</div>
                    ))}
                </p>
            )}
            <form onSubmit={handlePasswordUpdate} className="w-full max-w-md">
                <CurrentPasswordInput
                    currentPassword={currentPassword}
                    setCurrentPassword={setCurrentPassword}
                    errors={profileUpdateErrors}
                />
                <PasswordInput
                    password={newPassword}
                    passwordConfirmation={newPasswordConfirmation}
                    setPassword={setNewPassword}
                    setPasswordConfirmation={setNewPasswordConfirmation}
                    errors={passwordUpdateErrors}
                />
                <Button
                    type="submit"
                    label="Change password"
                    className="p-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-1/2 text-center"
                />
                {passwordUpdateSuccessMessage && (
                    <p className="mt-4 text-green-600">
                        {passwordUpdateSuccessMessage}
                    </p>
                )}
                {!passwordUpdateErrors.errors &&
                    passwordUpdateErrors.message && (
                        <p className="mt-4 text-red-600">
                            {passwordUpdateErrors.message.map((item) => (
                                <div>item</div>
                            ))}
                        </p>
                    )}

                <div className="mt-4"></div>
            </form>
        </div>
    );
};
