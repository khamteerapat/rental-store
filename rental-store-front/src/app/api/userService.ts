import axiosInstance from "@/app/api/axiosInstance";
import axios from "axios";

export const getUserByPhoneNo = async ({phone} : {phone:string}) => {
    try {
        const response = await axiosInstance.post('/api/v1/users/get-user',
            {
                username: phone
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
