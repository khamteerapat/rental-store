package com.store.rentalbook.controller;

import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.rent.RentBookRequestPayload;
import com.store.rentalbook.service.RentBookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/rent")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class RentController {
    private final RentBookService rentService;

    @PostMapping("/rent-book")
    public ResponseEntity<ResponsePayload<String>> rentBook(@RequestBody RentBookRequestPayload rentBookPayload){
        rentService.rentBook(rentBookPayload.getUsername(), rentBookPayload.getBooks());
        return ResponseEntity.ok(new ResponsePayload<>("Success","Book rented successfully"));
    }
}
