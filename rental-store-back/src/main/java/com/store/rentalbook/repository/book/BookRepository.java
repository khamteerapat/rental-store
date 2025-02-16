package com.store.rentalbook.repository.book;

import com.store.rentalbook.entity.Book;
import com.store.rentalbook.payload.book.BookPayload;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface BookRepository {
    List<BookPayload> getAllBooksBySearch(String searchText);
    List<BookPayload> getAllBooksAfterCreateTimestamp(LocalDateTime createTimestamp);

    List<Book> getBookByIdList(List<UUID> bookIdList);

    void batchUpdate(List<Book> bookList);

    void updateBookNumberInStock(List<Book> bookList);
}
