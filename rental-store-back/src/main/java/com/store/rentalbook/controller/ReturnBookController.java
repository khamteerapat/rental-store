package com.store.rentalbook.controller;

import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.rent.RentBookRequestPayload;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import com.store.rentalbook.payload.returnbook.ReturnBookRequestPayload;
import com.store.rentalbook.service.ReturnBookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/return")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class ReturnBookController {
    private final ReturnBookService returnService;

    @PostMapping("/rented-list")
    public ResponseEntity<ResponsePayload<List<RentalTransactionPayload>>> getRentedList(@RequestBody RentBookRequestPayload requestPayload){
        List<RentalTransactionPayload> rentedList = returnService.getRentedBooksByUserId(requestPayload.getUsername());
        return ResponseEntity.ok(new ResponsePayload<>("Success",rentedList));
    }

    @PostMapping("/return-book")
    public ResponseEntity<ResponsePayload<String>> returnBook(@RequestBody ReturnBookRequestPayload requestPayload){
        returnService.returnBook(requestPayload);
        return ResponseEntity.ok(new ResponsePayload<>("Success","Book returned successfully"));
    }
}
