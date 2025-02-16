package com.store.rentalbook.payload.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class UserResponsePayload {
    private String username;
    @JsonProperty("phone_no")
    private String phoneNo;
    @JsonProperty("full_name")
    private String fullName;
}
