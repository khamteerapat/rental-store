import axios from 'axios';
import { getSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
const serviceUrlGeneral = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT

const axiosLoginIns = axios.create({
    baseURL: serviceUrlGeneral, 
});

axiosLoginIns.interceptors.request.use(
    async config => {
        const session = await getSession();
        if(session){
            config.headers['Authorization'] = `Bearer ${session?.accessToken}`; 
        }
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = serviceUrlGeneral
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosLoginIns.interceptors.response.use(
    response => response, // ถ้าทุกอย่างปกติ ให้ส่ง response กลับไปตามปกติ
    async error => {
        console.log('error.response', error.response)
        if (error.response && error.response.status === 401) {
            await signOut();
        }
        return Promise.reject(error);
    }
);

export default axiosLoginIns;