import {DISCOVER_ROUTE} from "../api-routes";
import {httpCommon} from "../http-client";

const discoverLand = async () => {
    try {
        const response = await httpCommon.get(DISCOVER_ROUTE);
        return response.data;
    } catch (error: any) {
        console.log("error discover.service", error);

        throw error;
    }
}
export const discoverService = {
    discoverLand,
}
