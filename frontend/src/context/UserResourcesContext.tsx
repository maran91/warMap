import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { UserResourcesType } from "../types/auth.type";
import {
    UserResources,
    UserResourcesContextType,
} from "../types/userResources.type";

const UserResourcesContext = createContext<
    UserResourcesContextType | undefined
>(undefined);

interface UserResourcesProviderProps {
    children: ReactNode;
}

export const UserResourcesProvider: FC<UserResourcesProviderProps> = ({
    children,
}) => {
    const [userResources, setUserResources] = useState<UserResources | null>(
        null,
    );

    useEffect(() => {
        const storeResources = localStorage.getItem("resources");
        if (storeResources) {
            setUserResources(JSON.parse(storeResources));
        }
    }, []);

    const addOrUpdateUserResources = (resources: UserResourcesType) => {
        setUserResources(resources);
        console.log("UserResourcesContext->addOrUpdateUserResources: " ,resources)
        localStorage.setItem("resources", JSON.stringify(resources));
    };
    const deleteUserResources = () => {
        localStorage.removeItem("resources");
    };

    return (
        <UserResourcesContext.Provider
            value={{
                userResources,
                addOrUpdateUserResources,
                deleteUserResources,
            }}
        >
            {children}
        </UserResourcesContext.Provider>
    );
};

export const useUserResources = (): UserResourcesContextType => {
    const context = useContext(UserResourcesContext);
    if (!context) {
        throw new Error(
            "useUserResources must be used within a UserResourcesProvider",
        );
    }
    return context;
};
