import React, { useState } from "react";
import { useUserResources } from "../../context/UserResourcesContext";
import { useMutation } from "@tanstack/react-query";
import { recruitmentService } from "../../api/recruitment/recruitment.service";
import { Unit } from "../../types/userResources.type";
import { InputNumberValueChangeEvent } from "primereact/inputnumber";

export const useRecruitment = () => {
    const [amount, setAmount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const { userResources, addOrUpdateUserResources } = useUserResources();
    const { resources = [], units = [] } = userResources || {};

    const recruitmentMutation = useMutation({
        mutationFn: async (amount: number) => {
            setError(null);
            setSuccess(null);
            console.log("amount: ", amount);
            return recruitmentService.recruitSoldier(amount);
        },
        onSuccess: (data) => {
            setSuccess("Recruitment successful");
            console.log(data);
            const updatedUnits = units.map((unit: Unit) => {
                if (unit.unit_name.toLowerCase() === "soldier") {
                    return { ...unit, quantity: data.updateSoldiersQuantity };
                }
                return unit;
            });
            const updatedResources = resources.map((resource) => {
                if (resource.resource_name.toLowerCase() === "food") {
                    return { ...resource, quantity: data.updateFoodQuantity };
                }
                return resource;
            });
            const updatedUserResources = {
                resources: updatedResources,
                units: updatedUnits,
            };
            addOrUpdateUserResources(updatedUserResources);
        },
        onError: (error: any) => {
            setError(error.message);
        },
    });
    const handleRecruitment = (event: React.FormEvent) => {
        event.preventDefault();
        if (amount !== null) recruitmentMutation.mutate(amount);
    };
    const handleAmountChange = (event: InputNumberValueChangeEvent) => {
        setAmount(event.value ?? 0);
    };
    return {
        handleAmountChange,
        handleRecruitment,
        error,
        success,
        amount,
    };
};
