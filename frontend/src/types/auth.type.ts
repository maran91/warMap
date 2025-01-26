import {UserResources} from "./userResources.type";

export type User = {
    id: number;
    name: string;
    email: string;
};
export type newUser = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};
export type AuthContextType = {
    user: User | null;
    login: (user: User, token: string) => void;
    logout: () => void;
};
export type AuthSignupErrorsType = {
    message?: string[];
    errors?: AuthSignupFieldErrorsType;
};
export type AuthSignupFieldErrorsType = {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
};
export type AuthLoginErrorsType = {
    message?: string[];
    errors?: AuthLoginFieldErrorsType;
};
type AuthLoginFieldErrorsType = {
    email?: string[];
    password?: string[];
};
export type AuthResponseType = {
    userInfo: UserResourcesType;
    user: User;
    token: string;
};
export type LoginUserType = {
    email: string;
    password: string;
};
export type ResourcesType = {
    id: number;
    resource_name : string;
    quantity: number;
}[];
export type UserResourcesType = {
    resources: ResourcesType;
    units: UnitsType;

};
export type UnitsType = {
    id: number;
    unit_name: string;
    quantity: number;
}[];
