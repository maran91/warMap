import { LoginUserType, NewUser } from "../../types/auth.type";
import { httpCommon } from "../http-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../api-routes";

const createAccount = async (newUser: NewUser) => {
    console.log("newUser", newUser);
    const response = await httpCommon.post(SIGNUP_ROUTE, newUser);
    console.log("response", response);

    return response.data;
};

const login = async (user: LoginUserType) => {
    const response = await httpCommon.post(LOGIN_ROUTE, user);
    console.log("response", response);
    return response.data;
};

export const authenticationService = {
    createAccount,
    login,
};
