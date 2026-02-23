import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === 'production' ? 'https://chatapp-1-2hbc.onrender.com' : '/api',
    withCredentials: true,
});