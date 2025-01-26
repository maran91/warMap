import { RECRUITMENT_ROUTE } from "../api-routes";
import { httpCommon } from "../http-client";

const RecruitSoldier = async (amount: number) => {
    const response = await httpCommon.post(RECRUITMENT_ROUTE, { amount });
    return response.data;
};

export const recruitmentService = {
    RecruitChild: RecruitSoldier,
};
