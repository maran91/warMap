import { useUserResources } from "../../context/UserResourcesContext";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { discoverService } from "../../api/resources/discover.service";
import { Resource } from "../../types/userResources.type";

export const useDiscover = () => {
    const { userResources, addOrUpdateUserResources } = useUserResources();
    const [error, setError] = useState<string | null>(null);
    const [sucsess, setSucsess] = useState<string | null>(null);
    const { resources = [], units = [] } = userResources || {};

    const discoveryMutation = useMutation({
        mutationFn: async () => {
            setError(null);
            setSucsess(null);
            return discoverService.discoverLand();
        },
        onSuccess: (data) => {
            console.log("data", data);
            setSucsess(data.message);
            setTimeLeft(data.time_left);
            localStorage.setItem("timeLeft", JSON.stringify(data.time_left));

            const updateResources = resources.map((resource: Resource) => {
                if (resource.resource_name.toLowerCase() === "territory") {
                    return { ...resource, quantity: data.quantity };
                }
                return resource;
            });
            const updatedUserResources = {
                resources: updateResources,
                units: units,
            };
            addOrUpdateUserResources(updatedUserResources);
        },
        onError: (error) => {
            setError(error.message);
        },
    });
    const storedTimeLeftString = localStorage.getItem("timeLeft");
    const initialTimeLeft =
        storedTimeLeftString === null ? 0 : JSON.parse(storedTimeLeftString);

    const [timeLeft, setTimeLeft] = React.useState<number>(initialTimeLeft);

    const handleDiscovery = async () => {
        discoveryMutation.mutate();
    };
    return { error, sucsess, handleDiscovery, timeLeft };
};
