import axios from 'axios';
import { store } from './store/store';

const URL =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8000/api/v1'
        : 'https://efs**********/api/v1';

// const URL = 'https://locals-admin-panel-api-lhxhi.ondigitalocean.app/local-admin-backend-api/api/v1';

const axiosInstance = axios.create({
    baseURL: URL
});

const token = localStorage.getItem('access_token');
axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.auth.idToken;
    config.params = config.params || {};
    config.params['auth'] = token;
    return config;
});

export default axiosInstance;
