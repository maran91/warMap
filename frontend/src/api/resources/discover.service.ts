import { DISCOVER_ROUTE } from "../api-routes";
import { httpCommon } from "../http-client";

const discoverLand = async () => {
    const response = await httpCommon.post(DISCOVER_ROUTE);
    return response.data;
};
export const discoverService = {
    discoverLand,
};
