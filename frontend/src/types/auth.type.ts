export type User = {
    id: string;
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
    user: User;
    token: string;
};
export type LoginUserType = {
    email: string;
    password: string;
};
