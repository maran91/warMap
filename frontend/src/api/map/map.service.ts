import { httpCommon } from "../http-client";
import {
    MAP,
    MAP_ATTACK,
    OWNED_LOCATIONS,
    UPDATE_CITY_DETAILS,
} from "../api-routes";
import { Attack, ProvinceDetails } from "../../types/map.type";

const getAllCities = async () => {
    const response = await httpCommon.get(MAP);
    return response.data;
};
const getOwnedCities = async () => {
    const response = await httpCommon.get(OWNED_LOCATIONS);
    return response.data;
};
const updateCityDetails = async (cityDetails: ProvinceDetails) => {
    const response = await httpCommon.put(UPDATE_CITY_DETAILS, cityDetails);
    return response.data;
};
const attackCity = async (cityDetails: Attack) => {
    const response = await httpCommon.post(MAP_ATTACK, cityDetails);
    return response.data;
};

export const mapService = {
    getAllCities,
    getOwnedCities,
    updateCityDetails,
    attackCity,
};
