import { httpCommon } from "../http-client";
import { UPDATE_PASSWORD, UPDATE_PROFILE } from "../api-routes";
import { UpdatePasswordType, UpdateProfileType } from "../../types/auth.type";

const updateProfileInformation = async (newProfile: UpdateProfileType) => {
    console.log("newUser", newProfile);
    const response = await httpCommon.put(UPDATE_PROFILE, newProfile);
    console.log("response", response);

    return response.data;
};
const updatePassword = async (newPassword: UpdatePasswordType) => {
    console.log("newPassword", newPassword);
    const response = await httpCommon.put(UPDATE_PASSWORD, newPassword);
    return response.data;
};
export const profileService = { updateProfileInformation, updatePassword };
