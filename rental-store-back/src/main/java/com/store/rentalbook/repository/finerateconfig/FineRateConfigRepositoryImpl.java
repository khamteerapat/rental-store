package com.store.rentalbook.repository.finerateconfig;

import com.store.rentalbook.entity.FineRateConfig;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FineRateConfigRepositoryImpl implements FineRateConfigRepository{
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<FineRateConfig> getFineRateConfig() {
        String statement = """
                select f
                from FineRateConfig f
                """;
        return entityManager.createQuery(statement, FineRateConfig.class)
                .getResultList();
    }
}
