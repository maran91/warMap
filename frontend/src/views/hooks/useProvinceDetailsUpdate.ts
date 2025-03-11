import { useMutation } from "@tanstack/react-query";
import {
    OwnedProvincesResponseError,
    ProvinceDetails,
} from "../../types/map.type";
import React, { useState } from "react";
import { mapService } from "../../api/map/map.service";

interface UseCityDetailsUpdateProps {
    initialProvinceId: number;
    onSuccess: () => void;
}

export const useProvinceDetailsUpdate = ({
    initialProvinceId,
    onSuccess,
}: UseCityDetailsUpdateProps) => {
    const [newName, setNewName] = useState<string>("");
    const [errors, setErrors] = useState<OwnedProvincesResponseError>({});
    const [success, setSuccess] = useState<string | null>(null);
    const { mutate } = useMutation({
        mutationFn: async (cityDetails: ProvinceDetails) => {
            console.log(cityDetails);
            return mapService.updateCityDetails(cityDetails);
        },
        onSuccess: (data) => {
            setSuccess(data.message);
            setErrors({});
            onSuccess();
        },
        onError: (error: OwnedProvincesResponseError) => {
            console.log(error);
            setErrors(error);
            setSuccess(null);
        },
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cityDetails: ProvinceDetails = {
            city_id: initialProvinceId,
            new_name: newName,
        };
        mutate(cityDetails);
    };
    return {
        // Form state
        newName,
        setNewName,

        // Valitation state
        errors,

        setSuccess,
        success,

        // Handlers
        handleSubmit,
    };
};
