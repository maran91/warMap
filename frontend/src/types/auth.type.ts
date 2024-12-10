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
    login: (user: User, token: string, userResources: userResourcesType) => void;
    logout: () => void;
    loading: boolean;
    userResources: userResourcesType | null;
};
export type AuthSignupErrorsType = {
    message?: string[];
    errors?: AuthSignupFieldErrorsType;
};
type AuthSignupFieldErrorsType = {
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
    userResources: userResourcesType;
    user: User;
    token: string;
};
export type LoginUserType = {
    email: string;
    password: string;
};
export type userResourcesType = {
        id: number;
        resource_name : string;
        quantity: number;
}[];
