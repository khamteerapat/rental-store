package com.store.rentalbook.payload.auth;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequestPayload {
    private String username;
    private String password;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("full_name")
    private String fullName;
}
