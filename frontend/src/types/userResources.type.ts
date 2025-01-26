import { UserResourcesType } from "./auth.type";

export type Resource = {
    id: number;
    resource_name: string;
    quantity: number;
};

export type Unit = {
    id: number;
    unit_name: string;
    quantity: number;
};

export type UserResources = { resources: Resource[]; units: Unit[] };
export type UserResourcesContextType = {
    userResources: UserResources | null;
    addOrUpdateUserResources: (resources: UserResourcesType) => void;
    deleteUserResources: () => void;
};
