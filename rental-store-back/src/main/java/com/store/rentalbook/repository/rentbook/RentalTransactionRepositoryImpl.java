package com.store.rentalbook.repository.rentbook;

import com.store.rentalbook.entity.RentalTransaction;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RentalTransactionRepositoryImpl implements RentalTransactionRepository {
    @PersistenceContext
    private EntityManager entityManager;
    private final JdbcTemplate jdbcTemplate;

    @Override
    @Transactional
    public void batchSave(List<RentalTransaction> rentalTransactionList) {
        for (int i = 0; i < rentalTransactionList.size(); i++) {
            entityManager.persist(rentalTransactionList.get(i));

            // เมื่อถึงจำนวน BATCH_SIZE ให้ flush และ clear entityManager
            if (i > 0 && i % 1000 == 0) {
                entityManager.flush();
                entityManager.clear();
            }
        }

        // Flush ข้อมูลที่เหลือ
        entityManager.flush();
        entityManager.clear();
    }

    @Override
    @Transactional
    public void batchUpdate(List<RentalTransaction> rentalTransactionList) {
        for (int i = 0; i < rentalTransactionList.size(); i++) {
            entityManager.merge(rentalTransactionList.get(i));

            // เมื่อถึงจำนวน BATCH_SIZE ให้ flush และ clear entityManager
            if (i > 0 && i % 1000 == 0) {
                entityManager.flush();
                entityManager.clear();
            }
        }

        // Flush ข้อมูลที่เหลือ
        entityManager.flush();
        entityManager.clear();
    }

    @Override
    @Transactional
    public void batchUpdateReturnTrn(List<RentalTransaction> rentalTransactionList) {
        String statement = """
                update rentals_trn set status = ?,return_date = ?, fine = ?,last_update_datetime= ? ,last_updated_by = ? where id = ?
                """;
        jdbcTemplate.batchUpdate(statement, rentalTransactionList, rentalTransactionList.size(), (ps, rentalTransaction) -> {
            ps.setString(1, rentalTransaction.getStatus().name());
            ps.setTimestamp(2, rentalTransaction.getReturnDate() != null ? Timestamp.valueOf(rentalTransaction.getReturnDate()) : null);
            ps.setBigDecimal(3, rentalTransaction.getFine());
            ps.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
            ps.setString(5, rentalTransaction.getLastUpdatedBy());
            ps.setObject(6, rentalTransaction.getId());
        });
    }

    @Override
    public List<RentalTransactionPayload> getRentedBooksByUserId(String username) {
        String statement = """
               select e.id as transactionId,b.id as bookId,b.title as bookTitle,e.rentTimestamp,e.dueDate,b.price as bookPrice,e.status
               from RentalTransaction e
               inner join e.book b on e.book.id = b.id
               inner join e.user u on e.user.id = u.id
               where u.username = :username and e.status = 'RENTED'
               order by e.dueDate asc
               """;
        return entityManager.createQuery(statement, RentalTransactionPayload.class)
                .setParameter("username", username)
                .getResultList();
    }

    @Override
    public List<RentalTransactionPayload> getHistoryRentedBooksByUserId(String username) {
        String statement = """
               select e.id as transactionId,b.id as bookId,b.title as bookTitle,e.rentTimestamp,e.dueDate,b.price as bookPrice,e.fine,e.status
               from RentalTransaction e
               inner join e.book b on e.book.id = b.id
               inner join e.user u on e.user.id = u.id
               where u.username = :username
               order by e.rentTimestamp desc
               """;
        return entityManager.createQuery(statement, RentalTransactionPayload.class)
                .setParameter("username", username)
                .getResultList();
    }
}
