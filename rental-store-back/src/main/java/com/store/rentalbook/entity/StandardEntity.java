package com.store.rentalbook.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;

import java.time.LocalDateTime;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class StandardEntity {
    @Column(name = "create_datetime", nullable = false)
    @ColumnDefault("CURRENT_TIMESTAMP")
    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime createDatetime;

    @Column(name = "created_by", nullable = false, length = 100)
    private String createdBy;

    @Column(name = "last_update_datetime")
    private LocalDateTime lastUpdateDatetime;

    @Column(name = "last_updated_by", length = 100)
    private String lastUpdatedBy;
}
