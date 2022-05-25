import axios from "axios";
import { AuthProvider } from "react-admin";
import { LOGIN_URL } from "../../constants/constants";

interface User {
    id: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    password: string;
}

const authProvider: AuthProvider = {
    login: async ({username, password}: User) => {
        return axios.post(LOGIN_URL, {
            username,
            password
        }).then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token);
        }).catch(() => {
            throw new Error('Network error');
        })
    },
    logout: () => {
        localStorage.removeItem("token");
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
    },
    getPermissions: () => {
        return Promise.resolve();
    },
    checkError: () => {
        return Promise.resolve();
    }
}

export default authProvider;