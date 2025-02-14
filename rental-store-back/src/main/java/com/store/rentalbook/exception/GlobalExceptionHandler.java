package com.store.rentalbook.exception;

import com.store.rentalbook.payload.ResponsePayload;
import org.slf4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger log = org.slf4j.LoggerFactory.getLogger(GlobalExceptionHandler.class);
    private static final String DEFAULT_ERROR_MESSAGE = "An error occurred";
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ResponsePayload<?>> handleRuntimeException(RuntimeException e) {
        log.error(e.getMessage(), e);
        return ResponseEntity.internalServerError().body(new ResponsePayload<>(DEFAULT_ERROR_MESSAGE,null));
    }
}
