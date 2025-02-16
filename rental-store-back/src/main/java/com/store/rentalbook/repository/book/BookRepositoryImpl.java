package com.store.rentalbook.repository.book;

import com.store.rentalbook.entity.Book;
import com.store.rentalbook.payload.book.BookPayload;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class BookRepositoryImpl implements BookRepository{
    @PersistenceContext
    private EntityManager entityManager;
    private final JdbcTemplate jdbcTemplate;

    @Override
    public List<BookPayload> getAllBooksBySearch(String searchText) {
        String statement = """
                select b.id, b.title, b.author, b.category, b.barCode, b.price, b.avgRating, b.bookCover, b.numberInStock
                from Book b
                """;
        if(!StringUtils.isEmpty(searchText)){
            statement += """
                    where b.title like :searchText or b.author like :searchText or b.category like :searchText
                    """;
        }
        TypedQuery<BookPayload> query = entityManager.createQuery(statement, BookPayload.class);

        if(!StringUtils.isEmpty(searchText)){
            query.setParameter("searchText", "%" + searchText + "%");
        }
        return query.getResultList();
    }

    @Override
    public List<BookPayload> getAllBooksAfterCreateTimestamp(LocalDateTime createTimestamp) {
        String statement = """
                select b.id, b.title, b.author, b.category, b.barCode, b.price, b.avgRating, b.bookCover, b.numberInStock
                from Book b
                where b.createDatetime >= :createTimestamp
                """;
        return entityManager.createQuery(statement, BookPayload.class)
                .setParameter("createTimestamp", createTimestamp)
                .getResultList();
    }

    @Override
    public List<Book> getBookByIdList(List<UUID> bookIdList) {
        String statement = """
                select b
                from Book b
                where b.id in :bookIdList
                """;
        return entityManager.createQuery(statement, Book.class)
                .setParameter("bookIdList", bookIdList)
                .getResultList();
    }

    @Override
    @Transactional
    public void batchUpdate(List<Book> bookList) {
        for (int i = 0; i < bookList.size(); i++) {
            entityManager.merge(bookList.get(i));

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
    public void updateBookNumberInStock(List<Book> bookList) {
        String statement = """
                update books set number_in_stock = number_in_stock + ? where id = ?
                """;
        jdbcTemplate.batchUpdate(statement, bookList, bookList.size(), (ps, book) -> {
            ps.setInt(1, book.getNumberInStock());
            ps.setObject(2, book.getId());
        });
    }
}
