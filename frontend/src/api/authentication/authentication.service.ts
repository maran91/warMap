import {LoginUserType, newUser} from "../../types/auth.type";
import { httpCommon } from "../http-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../api-routes";

const createAccount = async (newUser: newUser) => {
    try {
        const response = await httpCommon.post(SIGNUP_ROUTE, newUser);
        console.log("response", response);

        return response.data;
    } catch (error: any) {
        console.log("error auth.service", error);

        throw error;
    }
};

const login = async (user: LoginUserType) => {
    try {
        const response = await httpCommon.post(LOGIN_ROUTE, user);
        console.log("response", response);
        return response.data;
    } catch (error: any) {
        console.log("error auth.service", error);
        throw error;
    }
};

export const authenticationService = {
    createAccount,
    login,
};
