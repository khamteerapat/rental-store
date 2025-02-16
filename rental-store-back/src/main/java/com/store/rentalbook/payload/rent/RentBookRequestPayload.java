package com.store.rentalbook.payload.rent;

import com.store.rentalbook.payload.book.BookPayload;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class RentBookRequestPayload {
    private String username;
    private List<BookPayload> books;
}
