package com.store.rentalbook.payload.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.store.rentalbook.payload.user.UserResponsePayload;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponsePayload {
    @JsonProperty("user_information")
    private UserResponsePayload userInformation;
    private String token;
}
