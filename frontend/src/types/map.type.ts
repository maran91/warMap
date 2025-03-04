export type CityStat = {
    id: number;
    name: string;
    address: number;
    governor: string;
};
export type OwnedCity = {
    id: number;
    name: string;
    soldierCount: number;
    governor: string;
};

export type CityDetails = {
    city_id: number;
    new_name: string;
};
export type OwnedCitiesResponseError = {
    message?: string[];
    errors?: CityFieldErrorDetails;
};
export type CityFieldErrorDetails = {
    new_name?: string[];
};
export type AttackCityResponse = {
    message?: string;
    error?: string;
    user_soldiers?: number;
    city?: string;
    soldiers_in_city?: number;
    governor?: string;
};
export type Attack = {
    city_id: number;
    soldiers_amount: number;
};
