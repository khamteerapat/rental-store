package com.store.rentalbook.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ResponsePayload<T> {
    private String message;
    private T data;
}
