package com.store.rentalbook.controller;

import com.store.rentalbook.entity.Book;
import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.book.BookPayload;
import com.store.rentalbook.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class BookController {
    private final BookService bookService;

    @GetMapping("/search")
    public ResponseEntity<ResponsePayload<List<BookPayload>>> getAllBooksBySearch(@RequestParam("search") String searchText){
        return ResponseEntity.ok(new ResponsePayload<>("Success", bookService.getAllBooksBySearch(searchText)));
    }

    @GetMapping("/new-books")
    public ResponseEntity<ResponsePayload<List<BookPayload>>> getAllNewBooks(){
        return ResponseEntity.ok(new ResponsePayload<>("Success", bookService.getAllNewBooks()));
    }
}
