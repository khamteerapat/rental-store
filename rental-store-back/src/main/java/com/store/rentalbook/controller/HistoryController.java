package com.store.rentalbook.controller;

import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import com.store.rentalbook.service.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/history")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class HistoryController {
    private final HistoryService historyService;
    @GetMapping("/get")
    public ResponseEntity<ResponsePayload<List<RentalTransactionPayload>>> getHistory(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails user) {
            List<RentalTransactionPayload> historyList = historyService.getHistoryRentedBooksByUserId(user.getUsername());
            return ResponseEntity.ok(new ResponsePayload<>("Success", historyList));
        } else {
           return ResponseEntity.status(401).body(new ResponsePayload<>("Unauthorized", null));
        }
    }
}
