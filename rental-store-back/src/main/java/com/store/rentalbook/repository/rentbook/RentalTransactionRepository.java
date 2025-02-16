package com.store.rentalbook.repository.rentbook;

import com.store.rentalbook.entity.RentalTransaction;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;

import java.util.List;

public interface RentalTransactionRepository {
    void batchSave(List<RentalTransaction> rentalTransactionList);

    void batchUpdate(List<RentalTransaction> rentalTransactionList);

    void batchUpdateReturnTrn(List<RentalTransaction> rentalTransactionList);

    List<RentalTransactionPayload> getRentedBooksByUserId(String username);

    List<RentalTransactionPayload> getHistoryRentedBooksByUserId(String username);
}
