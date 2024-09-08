export type User = {
    id: string;
    name: string;
    email: string;
}
export type newUser = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export type AuthContextType = {
    user: User | null;
    login: (user:User, token: string) => void;
    logout: () => void;
}
export type AuthErrorsType = {
    general?: string[];
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
};
export type AuthResponseType = {
    user: User;
    token: string;
}
export type LoginUserType = {
    email: string;
    password: string;
}
