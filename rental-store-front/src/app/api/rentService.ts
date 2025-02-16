import axiosInstance from "@/app/api/axiosInstance";
import { BookPayload } from "@/payload/book-payload";

export const saveRentTransaction = async ({username, books} : {username:string, books:BookPayload[]}) => {
    try {
        const response = await axiosInstance.post('/api/v1/rent/rent-book',
            {
                username: username,
                books: books
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
