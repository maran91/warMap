import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { recruitmentService } from "../../api/recruitment/recruitment.service";
import { InputNumberValueChangeEvent } from "primereact/inputnumber";
import { useUpdatedUserResources } from "./useUpdatedUserResources";

export const useRecruitment = () => {
    const [amount, setAmount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const { updateUserResources } = useUpdatedUserResources();

    const recruitmentMutation = useMutation({
        mutationFn: async (amount: number) => {
            setError(null);
            setSuccess(null);
            return recruitmentService.recruitSoldier(amount);
        },
        onSuccess: (data) => {
            setSuccess("Recruitment successful");

            updateUserResources({
                unitName: "soldier",
                unitQuantity: data.updateSoldiersQuantity,
                resourceName: "food",
                resourceQuantity: data.updateFoodQuantity,
            });
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
