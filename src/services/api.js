import axios from 'axios';
import { getToken } from "./auth";

const apiUrl = process.env.REACT_APP_API_URL
const api = axios.create({
    baseURL: apiUrl
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `OPENUX ${token}`;
    }
    return config;
});
export default api;