import { useMutation } from "@tanstack/react-query";
import { CityDetails, OwnedCitiesResponseError } from "../../types/map.type";
import React, { useState } from "react";
import { mapService } from "../../api/map/map.service";

interface UseCityDetailsUpdateProps {
    initialCityId: number;
    onSuccess: () => void;
}

export const useCityDetailsUpdate = ({
    initialCityId,
    onSuccess,
}: UseCityDetailsUpdateProps) => {
    const [newName, setNewName] = useState<string>("");
    const [errors, setErrors] = useState<OwnedCitiesResponseError>({});
    const [success, setSuccess] = useState<string | null>(null);
    const { mutate } = useMutation({
        mutationFn: async (cityDetails: CityDetails) => {
            console.log(cityDetails);
            return mapService.updateCityDetails(cityDetails);
        },
        onSuccess: (data) => {
            setSuccess(data.message);
            setErrors({});
            onSuccess();
        },
        onError: (error: OwnedCitiesResponseError) => {
            console.log(error);
            setErrors(error);
            setSuccess(null);
        },
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cityDetails: CityDetails = {
            city_id: initialCityId,
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
