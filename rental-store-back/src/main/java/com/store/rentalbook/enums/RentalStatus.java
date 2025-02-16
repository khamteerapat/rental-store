package com.store.rentalbook.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum RentalStatus {
    RENTED("RENTED"),
    RETURNED("RETURNED");
    private final String value;


    @JsonValue
    public String getValue() {
        return value;
    }
}
