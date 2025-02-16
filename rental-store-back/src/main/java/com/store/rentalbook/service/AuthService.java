package com.store.rentalbook.service;

import com.store.rentalbook.entity.User;
import com.store.rentalbook.payload.auth.LoginRequestPayload;
import com.store.rentalbook.payload.auth.LoginResponsePayload;
import com.store.rentalbook.payload.user.UserPayload;
import com.store.rentalbook.payload.user.UserResponsePayload;
import com.store.rentalbook.repository.user.UserRepository;
import com.store.rentalbook.security.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public LoginResponsePayload login(LoginRequestPayload requestPayload) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestPayload.getUsername(), requestPayload.getPassword()));
        UserPayload userPayload = userRepository.find(requestPayload.getUsername());
        String token = jwtService.generateToken(userPayload.getUsername());
        return new LoginResponsePayload(
                new UserResponsePayload(
                        userPayload.getUsername(),
                        userPayload.getRole(),
                        userPayload.getFullName()
                ),
                token
        );
    }

    public void registerUser(LoginRequestPayload requestPayload,String role) {
        String encodedPass = passwordEncoder.encode(requestPayload.getPassword());
        userRepository.save(new User(
                UUID.randomUUID(),
                requestPayload.getUsername(),
                encodedPass,
                role,
                requestPayload.getUsername(),
                requestPayload.getFullName()
        ));
    }

    public boolean checkPassword(String password,String storedPassword) {
        return password.equals(storedPassword);
    }
}
