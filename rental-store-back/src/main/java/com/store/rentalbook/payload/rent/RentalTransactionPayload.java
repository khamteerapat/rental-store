package com.store.rentalbook.payload.rent;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.store.rentalbook.enums.RentalStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RentalTransactionPayload {
    @JsonProperty("transaction_id")
    private String transactionId;
    @JsonProperty("book_id")
    private String bookId;
    @JsonProperty("book_title")
    private String bookTitle;
    @JsonProperty("rent_timestamp")
    private LocalDateTime rentTimestamp;
    @JsonProperty("due_date")
    private LocalDate dueDate;
    @JsonProperty("return_date")
    private LocalDateTime returnDate;
    @JsonProperty("book_price")
    private BigDecimal bookPrice;
    private BigDecimal fine;
    private String status;

    public RentalTransactionPayload(UUID transactionId,UUID bookId, String bookTitle, LocalDateTime rentTimestamp, LocalDate dueDate, BigDecimal bookPrice, RentalStatus status) {
        this.transactionId = transactionId.toString();
        this.bookId = bookId.toString();
        this.bookTitle = bookTitle;
        this.rentTimestamp = rentTimestamp;
        this.dueDate = dueDate;
        this.bookPrice = bookPrice;
        this.status = status.getValue();
    }

    public RentalTransactionPayload(UUID transactionId,UUID bookId, String bookTitle, LocalDateTime rentTimestamp, LocalDate dueDate, BigDecimal bookPrice, BigDecimal fine, RentalStatus status) {
        this.transactionId = transactionId.toString();
        this.bookId = bookId.toString();
        this.bookTitle = bookTitle;
        this.rentTimestamp = rentTimestamp;
        this.dueDate = dueDate;
        this.bookPrice = bookPrice;
        this.fine = fine;
        this.status = status.getValue();
    }
}
