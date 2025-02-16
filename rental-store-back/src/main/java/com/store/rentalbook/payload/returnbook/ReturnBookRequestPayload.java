package com.store.rentalbook.payload.returnbook;

import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@AllArgsConstructor
@Getter
@Setter
public class ReturnBookRequestPayload {
    private String username;
    private List<RentalTransactionPayload> returnList;
}
