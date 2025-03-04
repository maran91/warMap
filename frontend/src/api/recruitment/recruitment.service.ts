import { RECRUITMENT_ROUTE } from "../api-routes";
import { httpCommon } from "../http-client";

const recruitSoldier = async (amount: number) => {
    const response = await httpCommon.post(RECRUITMENT_ROUTE, { amount });
    console.log("response", response);

    return response.data;
};

export const recruitmentService = {
    recruitSoldier,
};
