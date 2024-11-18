import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "@/constants";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => { // Change type here
    try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Directly set the header
        }
    } catch (error) { 
        console.log(error);
    }

    return config; // No need to cast
}

api.interceptors.request.use(onRequest);

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },

    async (error: any) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
);

const login = (data: any) => api.post('/api/v1/auth/signin', data);
const signup = (data: any) => api.post('/api/v1/auth/signup', data);
const outbound = () => api.get('/api/v1/agent/outbound-call');
const aiagent = (data: any) => api.post('/api/v1/agent/aiagent-call', data);
const addPhone = (data: any) => api.post('/api/v1/agent/add_to_queue', data);
const startDailer = () => api.post('/api/v1/agent/start_dialer');
const generateText = (data: any) => api.post('/api/v1/agent/generate-text', data);

export const apis = {
    login,
    signup,
    outbound,
    aiagent,
    generateText,
    addPhone,
    startDailer
}