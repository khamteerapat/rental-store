package com.store.rentalbook.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "fine_rate_config")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FineRateConfig extends StandardEntity{
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "min_day_late", nullable = false)
    private Integer minDayLate;

    @Column(name = "max_day_late")
    private Integer maxDayLate;

    @Column(name = "fine_percent", nullable = false, precision = 5, scale = 2)
    private BigDecimal finePercent;

}
