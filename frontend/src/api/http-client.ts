import axios, { AxiosResponse } from "axios";
export const httpCommon = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

httpCommon.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    (error) => {
        let message = error.message;
        if (!error.response || !error.response.status) {
            return Promise.reject({ message, code: "400" }); // default to 400 Bad Request
        }
        switch (error.response.status) {
            case 500:
                return Promise.reject({
                    message: "System Error. Please contact administrator",
                    code: "500",
                });
            default:
                //default to error 400 Bad Request
                if (error.response.data && error.response.data.message) {
                    message = error.response.data;
                    console.log("error.response.data.errors", error.response.data);
                }
                return Promise.reject(message);
        }
    },
);
