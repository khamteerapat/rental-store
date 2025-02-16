package com.store.rentalbook.repository.user;

import com.store.rentalbook.entity.User;
import com.store.rentalbook.payload.user.UserPayload;

import java.util.UUID;

public interface UserRepository {
    void save(User user);
    UserPayload find(String username);

    UUID findIdByUsername(String username);
}
