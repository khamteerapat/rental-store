package com.store.rentalbook.entity;

import com.store.rentalbook.enums.RentalStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "rentals_trn")
@NoArgsConstructor
@Getter
@Setter
public class RentalTransaction extends StandardEntity{
    @Id
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id",referencedColumnName = "id", nullable = false)
    @NotFound(action = NotFoundAction.IGNORE)
    private Book book;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",referencedColumnName = "id", nullable = false)
    @NotFound(action = NotFoundAction.IGNORE)
    private User user;

    @Column(name = "rent_timestamp", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime rentTimestamp;

    @Column(name = "due_date", nullable = false)
    private LocalDate dueDate;

    @Column(name = "return_date")
    private LocalDateTime returnDate;

    @Column(name = "fine", precision = 10, scale = 2)
    private BigDecimal fine;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private RentalStatus status;

    public RentalTransaction(UUID id, Book book, User user, LocalDateTime rentTimestamp, LocalDate dueDate, LocalDateTime returnDate, BigDecimal fine, RentalStatus status) {
        super.setCreatedBy(user.getUsername());
        this.id = id;
        this.book = book;
        this.user = user;
        this.rentTimestamp = rentTimestamp;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
        this.fine = fine;
        this.status = status;
    }

    public RentalTransaction( LocalDateTime lastUpdateDatetime, String lastUpdatedBy, UUID id, LocalDateTime rentTimestamp, LocalDate dueDate, LocalDateTime returnDate, BigDecimal fine, RentalStatus status) {
        super.setLastUpdateDatetime(lastUpdateDatetime);
        super.setLastUpdatedBy(lastUpdatedBy);
        this.id = id;
        this.rentTimestamp = rentTimestamp;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
        this.fine = fine;
        this.status = status;
    }
}
