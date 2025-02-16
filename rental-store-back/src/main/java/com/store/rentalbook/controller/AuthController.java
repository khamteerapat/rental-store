package com.store.rentalbook.controller;

import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.auth.LoginRequestPayload;
import com.store.rentalbook.payload.auth.LoginResponsePayload;
import com.store.rentalbook.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ResponsePayload<String>> registerUser(@RequestBody LoginRequestPayload requestPayload){
        authService.registerUser(requestPayload,"USER");
        return ResponseEntity.ok(new ResponsePayload<>("Success","User registered successfully"));
    }

    @PostMapping("/register-admin")
    public ResponseEntity<ResponsePayload<String>> registerAdmin(@RequestBody LoginRequestPayload requestPayload){
        authService.registerUser(requestPayload,"ADMIN");
        return ResponseEntity.ok(new ResponsePayload<>("Success","Admin registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<ResponsePayload<LoginResponsePayload>> login(@RequestBody LoginRequestPayload requestPayload){
        return ResponseEntity.ok(new ResponsePayload<>("Success", authService.login(requestPayload)));
    }
}
