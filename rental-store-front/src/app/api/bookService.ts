import axiosInstance from "@/app/api/axiosInstance";

export const getAllBookBySearch = async ({search} : {search:string}) => {
    try {
        const response = await axiosInstance.get('/api/v1/books/search',
            {
                params: {
                    search: search
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getAllNewBook = async () => {
    
    try {
        const response = await axiosInstance.get('/api/v1/books/new-books');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}