import { AuthProvider } from "./AuthContext";
import { UserResourcesProvider } from "./UserResourcesContext";
import React, { ReactNode } from "react";

interface AppProvidersProps {
    children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <AuthProvider>
            <UserResourcesProvider>{children}</UserResourcesProvider>
        </AuthProvider>
    );
};
