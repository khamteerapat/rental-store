package com.store.rentalbook.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void registerUser(String username, String password) {
        String encodedPass = passwordEncoder.encode(password);
    }

    public boolean checkPassword(String password,String storedPassword) {
        return password.equals(storedPassword);
    }
}
