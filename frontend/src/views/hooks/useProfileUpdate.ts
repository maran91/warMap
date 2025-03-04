import React, { useState } from "react";
import { SignupResponseError, UpdateProfileType } from "../../types/auth.type";
import { ColorOption } from "../../types/colorOption.type";
import { useMutation } from "@tanstack/react-query";
import { profileService } from "../../api/profile/profile.service";

export const useProfileUpdate = () => {
    // Validation state
    const [profileUpdateErrors, setProfileUpdateErrors] =
        useState<SignupResponseError>({});
    const [profileUpdateSuccessMessage, setProfileUpdateSuccessMessage] =
        useState<string | null>(null);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    //Form state
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [color, setColor] = useState<ColorOption | null>(null);
    const [username, setUsername] = useState<string>("");

    // API mutation
    const { mutate: updateProfile } = useMutation({
        mutationFn: (updatedProfile: UpdateProfileType) =>
            profileService.updateProfileInformation(updatedProfile),
        onSuccess: () => {
            setProfileUpdateSuccessMessage("Profile successfully updated");
            setProfileUpdateErrors({});
            setEmail("");
            setName("");
            setUsername("");
            setColor(null);
        },
        onError: (error: SignupResponseError) => {
            setProfileUpdateErrors(error);
            setProfileUpdateSuccessMessage(null);
        },
    });
    const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateProfile({
            ...(name && { name: name }),
            ...(email && { email: email }),
            ...(username && { username: username }),
            ...(color && { color: color }),
        });
    };
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

        // Valitation state
        profileUpdateSuccessMessage,
        profileUpdateErrors,
        isEmailValid,
        setIsEmailValid,

        //Handler
        handleProfileUpdate,
    };
};
