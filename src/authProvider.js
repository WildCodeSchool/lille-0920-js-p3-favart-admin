import axios from "axios";
import {api} from "./conf"

export default {
    // authentication
    login: async (params) => {
        try {
            const formData = {
                email: params.username,
                password: params.password,
            };
            const { data } = await axios.post(
                `${api.defaults.baseURL}/auth/login`,
                                formData
            );
            localStorage.setItem("token", data.token);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject();
        }
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("token");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: (params) => {
        if (localStorage.getItem("token")) {
            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("token");
        return Promise.resolve();
    },
    getIdentity: () => {
        return Promise.resolve();
    },
    // authorization
    getPermissions: () => {
        return Promise.resolve();
    },
};