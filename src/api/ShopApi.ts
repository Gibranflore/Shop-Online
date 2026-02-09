import axios from 'axios';


const ShopApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

ShopApi.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

export {ShopApi}