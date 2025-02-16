package com.store.rentalbook.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User extends StandardEntity {
    @Id
    private UUID id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String role;

    @Column(nullable = false)
    private String phoneNo;

    public User(UUID id, String username, String password, String role, String phoneNo, String fullName) {
        super.setCreatedBy(username);
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.role = role;
        this.phoneNo = phoneNo;
    }

    public User(UUID id,String username) {
        this.id = id;
        this.username = username;
    }
}
