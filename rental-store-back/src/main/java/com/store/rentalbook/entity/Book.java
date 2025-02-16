package com.store.rentalbook.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "books")
@Setter
@Getter
@NoArgsConstructor
public class Book extends StandardEntity{
    @Id
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private String category;

    @Column(name = "bar_code")
    private String barCode;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "avg_rating", precision = 3, scale = 2, columnDefinition = "decimal(3,2) default '0.0'")
    private BigDecimal avgRating;

    @Column(name = "book_cover")
    private String bookCover;

    @Column(name = "number_in_stock", nullable = false)
    private int numberInStock;
}
