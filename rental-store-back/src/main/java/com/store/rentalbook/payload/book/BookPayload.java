package com.store.rentalbook.payload.book;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty("bar_code")
    private String barCode;
    private BigDecimal price;
    @JsonProperty("avg_rating")
    private BigDecimal avgRating;
    @JsonProperty("book_cover")
    private String bookCover;
    @JsonProperty("number_in_stock")
    private Integer numberInStock;

}
