package com.store.rentalbook.repository.book;

import com.store.rentalbook.payload.book.BookPayload;

import java.util.List;

public interface BookRepository {
    List<BookPayload> getAllBooksBySearch(String searchText);
}
