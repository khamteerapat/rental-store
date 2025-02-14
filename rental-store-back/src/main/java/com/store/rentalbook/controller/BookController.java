package com.store.rentalbook.controller;

import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.book.BookPayload;
import com.store.rentalbook.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping("/search")
    public ResponseEntity<ResponsePayload<List<BookPayload>>> getAllBooksBySearch(@RequestParam("search") String searchText){
        return ResponseEntity.ok(new ResponsePayload<>("Success", bookService.getAllBooksBySearch(searchText)));
    }
}
