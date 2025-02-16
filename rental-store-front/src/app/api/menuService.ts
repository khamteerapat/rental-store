import axiosInstance from "@/app/api/axiosInstance";

export const getMenuList = async () => {
    try {
        const response = await axiosInstance.get('/api/v1/auth/menu',
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
