import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import {AuthContextType, User, userResourcesType} from "../types/auth.type";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined,
);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userResources, setUserResources] = useState<userResourcesType | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userFromLocalStorage = localStorage.getItem("user");
        const userResourcesString = localStorage.getItem("userResources");

        if (token && userFromLocalStorage) {
            const user: User = JSON.parse(userFromLocalStorage);
            const userResources: userResourcesType = userResourcesString ? JSON.parse(userResourcesString) : null;
            setUser(user);
            setUserResources(userResources);
        }
        setLoading(false);
    }, []);
    const login = (user: User, token: string, userResources: userResourcesType) => {
        // Mock login logic
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("authToken", token);
        localStorage.setItem("userResources", JSON.stringify(userResources));
        console.log("User logged in");
        console.log("Token:", token);
        console.log("User:", user);
        console.log("User Resources:", userResources);
        navigate("/home");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, userResources }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
