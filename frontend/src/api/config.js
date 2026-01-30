import axios from 'axios';

//export const API_BASE_URL = "https://api.nethajividhyalayam.com";
export const API_BASE_URL = "http://localhost:8000";

export const getImageUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${API_BASE_URL}${normalizedPath}`;
};

const api = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
