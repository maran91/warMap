import axios from "axios";

export const httpCommon = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

httpCommon.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
httpCommon.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {
        let message = error.message;
        if (!error.response || !error.response.status) {
            return Promise.reject({ message, code: "400" }); // default to 400 Bad Request
        }
        switch (error.response.status) {
            case 401:
                console.log("Unauthenticated. Redirecting to login.");
                localStorage.removeItem("token");
                window.location.href = "/login"; // Adjust the route as needed
                break;
            case 500:
                console.log("500 error", error.response.data.message);
                return Promise.reject({
                    message: "System Error. Please contact administrator",
                    code: "500",
                });
            default:
                if (error.response.data && error.response.data.message) {
                    message = error.response.data;
                    console.log(
                        "error.response.data.errors",
                        error.response.data,
                    );
                }
                return Promise.reject(message);
        }
    },
);
