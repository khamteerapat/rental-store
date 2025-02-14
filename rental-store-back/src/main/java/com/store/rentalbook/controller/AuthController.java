package com.store.rentalbook.controller;

import com.store.rentalbook.payload.auth.LoginRequestPayload;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    @PostMapping("/register")
    public String register(@RequestParam LoginRequestPayload loginRequestPayload) {
        return userService.registerUser(username, password);
    }
}
