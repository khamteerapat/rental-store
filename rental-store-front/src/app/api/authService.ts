import axiosLoginIns from "./axiosLoginIns";

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
