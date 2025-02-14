package com.store.rentalbook.repository.book;

import com.store.rentalbook.payload.book.BookPayload;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BookRepositoryImpl implements BookRepository{
    @PersistenceContext
    private final EntityManager entityManager;

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
}
