import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mapService } from "../../api/map/map.service";
import { Attack, AttackProvinceResponse } from "../../types/map.type";

interface UseSendSoldiersProps {
    id: number;
    onSuccess: () => void;
}

export const useSendSoldiers = ({ id }: UseSendSoldiersProps) => {
    const [soldiersAmount, setSoldiersAmount] = useState<number>(0);
    const [errors, setErrors] = useState<AttackProvinceResponse>({});
    const [successMessage, setsuccessMessage] = useState<string>("");
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (attackData: Attack) => {
            const response = await mapService.attackCity(attackData);
            if (!response || typeof response !== "object") {
                throw new Error("Invalid API response");
            }
            return response;
        },

        onSuccess: async (data) => {
            setsuccessMessage(data.message);
            setErrors({});
            await queryClient.invalidateQueries({ queryKey: ["mapData"] });
            console.log("useSendSoldiers: onSuccess CALLED", data);

            //onSuccess();
        },
        onError: (error: AttackProvinceResponse) => {
            console.log(error);
            console.log("invalidateQueries PLACEHOLDER"); // <--- ADD PLACEHOLDER LOG

            setErrors(error);
            setsuccessMessage("");
        },
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const attackData: Attack = {
            city_id: id,
            soldiers_amount: soldiersAmount,
        };
        console.log(attackData);
        mutate(attackData);
    };
    return {
        // Form state
        soldiersAmount,
        setSoldiersAmount,

        // Valitation state
        errors,
        successMessage,

        // Handlers
        handleSubmit,
    };
};
