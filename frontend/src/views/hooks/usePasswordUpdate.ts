import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SignupResponseError, UpdatePasswordType } from "../../types/auth.type";
import { profileService } from "../../api/profile/profile.service";

export const usePasswordUpdate = () => {
    // Validation state
    const [passwordUpdateErrors, setPasswordUpdateErrors] =
        useState<SignupResponseError>({});
    const [passwordUpdateSuccessMessage, setPasswordUpdateSuccessMessage] =
        useState<string | null>(null);

    // Form state
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfirmation, setNewPasswordConfirmation] =
        useState<string>("");

    //API mutation
    const { mutate: updatePassword } = useMutation({
        mutationFn: (updatePassword: UpdatePasswordType) =>
            profileService.updatePassword(updatePassword),
        onSuccess: (data) => {
            setPasswordUpdateSuccessMessage(data.message);
            setPasswordUpdateErrors({});
            setCurrentPassword("");
            setNewPassword("");
            setNewPasswordConfirmation("");
        },
        onError: (error: SignupResponseError) => {
            setPasswordUpdateErrors(error);
            setPasswordUpdateSuccessMessage(null);
        },
    });
    const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updatePassword({
            current_password: currentPassword,
            new_password: newPassword,
            new_password_confirmation: newPasswordConfirmation,
        });
    };
    return {
        // Form state
        currentPassword,
        newPassword,
        newPasswordConfirmation,
        setCurrentPassword,
        setNewPassword,
        setNewPasswordConfirmation,

        //Valitation state
        passwordUpdateSuccessMessage,
        passwordUpdateErrors,

        // Handler
        handlePasswordUpdate,
    };
};
