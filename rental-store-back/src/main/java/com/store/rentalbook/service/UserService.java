package com.store.rentalbook.service;

import com.store.rentalbook.payload.user.UserPayload;
import com.store.rentalbook.payload.user.UserResponsePayload;
import com.store.rentalbook.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public UserResponsePayload getUser(String username) {
        UserPayload user = userRepository.find(username);
        return new UserResponsePayload(user.getUsername(), user.getPhoneNo(), user.getFullName());
    }
}
