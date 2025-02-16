import axiosInstance from "@/app/api/axiosInstance";

export const getHistory = async () => {
    try {
        const response = await axiosInstance.get('/api/v1/history/get',

        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
