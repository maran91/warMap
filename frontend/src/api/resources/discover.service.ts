import { DISCOVER_ROUTE } from "../api-routes";
import { httpCommon } from "../http-client";

const discoverLand = async () => {
    const response = await httpCommon.post(DISCOVER_ROUTE);
    console.log("response", response);

    return response.data.original;
};
export const discoverService = {
    discoverLand,
};
