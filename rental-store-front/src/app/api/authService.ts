import axiosLoginIns from "./axiosLoginIns";
import axios from "axios";
export const authenticate = async ({username,password} : {username:string, password:string}) => {
    try {
        const response = await axiosLoginIns.post('/api/v1/auth/login',
            {
                username: username,
                password: password
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const register = async ({username,password,fullname} : {username:string, password:string,fullname:string}) => {
    try {
        const response = await axiosLoginIns.post('/api/v1/auth/register',
            {
                username: username,
                password: password,
                full_name: fullname
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return error.response.data;
            }
        } else {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};
