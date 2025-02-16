export interface RentalTrnPayload {
    transaction_id: string
    book_id: string
    book_title: string
    rent_timestamp: string
    due_date: string
    return_date: string
    book_price: number
    fine: number
    status: string
}