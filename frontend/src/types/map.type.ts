export type CityStat = {
    id: number;
    name: string;
    address: number;
    governor: string;
};
export type OwnedProvince = {
    id: number;
    name: string;
    soldierCount: number;
    governor: string;
};

export type ProvinceDetails = {
    city_id: number;
    new_name: string;
};
export type OwnedProvincesResponseError = {
    message?: string[];
    errors?: ProvinceFieldErrorDetails;
};
export type ProvinceFieldErrorDetails = {
    new_name?: string[];
};
export type AttackProvinceResponse = {
    message?: string;
    error?: string;
    user_soldiers?: number;
    city?: string;
    soldiers_in_province?: number;
    governor?: string;
};
export type Attack = {
    city_id: number;
    soldiers_amount: number;
};
