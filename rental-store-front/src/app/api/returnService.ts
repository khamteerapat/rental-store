import axiosInstance from "@/app/api/axiosInstance";
import { RentalTrnPayload } from "@/payload/rental-trn-payload";

export const getRentedTransaction = async ({username} : {username:string}) => {
    try {
        const response = await axiosInstance.post('/api/v1/return/rented-list',
            {
                username: username
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const returnBook = async ({username,returnTrn} : {username:string,returnTrn:RentalTrnPayload[]}) => {
    try {
        console.log(returnTrn);
        const response = await axiosInstance.post('/api/v1/return/return-book',
            {
                username: username,
                returnList: returnTrn
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
