package com.store.rentalbook.payload.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@AllArgsConstructor
@Getter
@Setter
public class UserPayload {
    private String username;
    private String password;
    private String role;
    private String fullName;
    private String phoneNo;
}
