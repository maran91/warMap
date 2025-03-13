import { useUserResources } from "../../context/UserResourcesContext";
import { Resource, Unit } from "../../types/userResources.type";

interface UpdateUserResourcesProps {
    unitName?: string;
    unitQuantity?: number;
    resourceName?: string;
    resourceQuantity?: number;
}

export const useUpdatedUserResources = () => {
    const { userResources, addOrUpdateUserResources } = useUserResources();
    const { resources = [], units = [] } = userResources || {};

    const updateUserResources = ({
        unitName,
        unitQuantity,
        resourceName,
        resourceQuantity,
    }: UpdateUserResourcesProps) => {
        let updatedUnits = units;
        let updatedResources = resources;
        if (unitName && unitQuantity) {
            updatedUnits = units.map((unit: Unit) =>
                unit.unit_name.toLowerCase() === unitName
                    ? {
                          ...unit,
                          quantity: unitQuantity ?? unit.quantity,
                      }
                    : unit,
            );
        }
        if (resourceName && resourceQuantity) {
            updatedResources = resources.map((resource: Resource) =>
                resource.resource_name.toLowerCase() === resourceName
                    ? {
                          ...resource,
                          quantity: resourceQuantity,
                      }
                    : resource,
            );
        }
        const updatedUserResources = {
            resources: updatedResources,
            units: updatedUnits,
        };
        addOrUpdateUserResources(updatedUserResources);
    };
    return { updateUserResources };
};
