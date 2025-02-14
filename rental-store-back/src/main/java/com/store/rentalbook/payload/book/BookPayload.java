package com.store.rentalbook.payload.book;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookPayload {
    private UUID id;
    private String title;
    private String author;
    private String category;
    private String barCode;
    private BigDecimal price;
    private BigDecimal avgRating;
    private String bookCover;
    private int numberInStock;
}
