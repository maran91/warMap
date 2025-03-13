import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { discoverService } from "../../api/resources/discover.service";
import { useUpdatedUserResources } from "./useUpdatedUserResources";

export const useDiscover = () => {
    const [error, setError] = useState<string | null>(null);
    const [sucsess, setSucsess] = useState<string | null>(null);
    const { updateUserResources } = useUpdatedUserResources();

    const discoveryMutation = useMutation({
        mutationFn: async () => {
            setError(null);
            setSucsess(null);
            return discoverService.discoverLand();
        },
        onSuccess: (data) => {
            setSucsess(data.message);
            setTimeLeft(data.time_left);
            localStorage.setItem("timeLeft", JSON.stringify(data.time_left));
            updateUserResources({
                resourceName: "territory",
                resourceQuantity: data.quantity,
            });
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
