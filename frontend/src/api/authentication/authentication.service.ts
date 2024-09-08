import {LoginUserType, newUser, User} from "../../types/auth.type";
import { httpCommon } from "../http-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../api-routes";
import handleError from "../../utils/errorHandler";

const createAccount = async (newUser: newUser) => {
    try {
        const response = await httpCommon.post(SIGNUP_ROUTE, newUser);
        return response.data;
    } catch (error: any) {
        handleError(error);
    }
};

const login = async (user: LoginUserType) => {
    try {
        const response = await httpCommon.post(LOGIN_ROUTE, user);
        return response.data;
    } catch (error: any) {
        handleError(error);
    }
};

export const authenticationService = {
    createAccount,
    login,
};
