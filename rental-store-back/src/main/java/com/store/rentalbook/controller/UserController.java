package com.store.rentalbook.controller;

import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.user.UserPayload;
import com.store.rentalbook.payload.user.UserResponsePayload;
import com.store.rentalbook.service.UserService;
import jakarta.persistence.NoResultException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class UserController {
    private final UserService userService;

    @PostMapping("/get-user")
    public ResponseEntity<ResponsePayload<UserResponsePayload>> getUser(@RequestBody UserPayload userPayload) {
        try {
            return ResponseEntity.ok(new ResponsePayload<>("Success", userService.getUser(userPayload.getUsername())));
        }catch (NoResultException | EmptyResultDataAccessException e){
            return ResponseEntity.status(NOT_FOUND).body(new ResponsePayload<>("User not found",null));
        }
    }
}
