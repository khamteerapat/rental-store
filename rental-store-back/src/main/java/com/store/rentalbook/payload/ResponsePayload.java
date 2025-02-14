package com.store.rentalbook.payload;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ResponsePayload<T> {
    private String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private T data;
}
