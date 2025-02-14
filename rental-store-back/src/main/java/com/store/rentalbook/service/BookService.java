package com.store.rentalbook.service;

import com.store.rentalbook.payload.book.BookPayload;
import com.store.rentalbook.repository.book.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public List<BookPayload> getAllBooksBySearch(String searchText){
        try {
            return bookRepository.getAllBooksBySearch(searchText);
        }catch (Exception e){
            throw new RuntimeException("Failed to get books by search text", e);
        }
    }
}
