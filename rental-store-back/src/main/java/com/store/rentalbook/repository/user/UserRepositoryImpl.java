package com.store.rentalbook.repository.user;

import com.store.rentalbook.entity.User;
import com.store.rentalbook.payload.user.UserPayload;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class UserRepositoryImpl implements UserRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public void save(User user) {
        entityManager.persist(user);
    }

    @Override
    public UserPayload find(String username) {
        String statement = """
                SELECT username, password, role, fullName, phoneNo
                from User
                where username = :username
                """;
        return entityManager.createQuery(statement, UserPayload.class)
                .setParameter("username", username)
                .getSingleResult();
    }

    @Override
    public UUID findIdByUsername(String username) {
        String statement = """
                SELECT id
                from User
                where username = :username
                """;
        return entityManager.createQuery(statement, UUID.class)
                .setParameter("username", username)
                .getSingleResult();
    }
}
