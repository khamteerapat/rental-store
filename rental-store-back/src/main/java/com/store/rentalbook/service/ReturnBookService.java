package com.store.rentalbook.service;

import com.store.rentalbook.entity.Book;
import com.store.rentalbook.entity.FineRateConfig;
import com.store.rentalbook.entity.RentalTransaction;
import com.store.rentalbook.enums.RentalStatus;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import com.store.rentalbook.payload.returnbook.ReturnBookRequestPayload;
import com.store.rentalbook.repository.book.BookRepository;
import com.store.rentalbook.repository.finerateconfig.FineRateConfigRepository;
import com.store.rentalbook.repository.rentbook.RentalTransactionRepository;
import com.store.rentalbook.utils.CalculateFineUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReturnBookService {
    private final RentalTransactionRepository rentalTransactionRepository;
    private final FineRateConfigRepository fineRateConfigRepository;
    private final BookRepository bookRepository;

    public List<RentalTransactionPayload> getRentedBooksByUserId(String username) {
        List<FineRateConfig> fineRateConfigs = fineRateConfigRepository.getFineRateConfig();
        List<RentalTransactionPayload> rentedBooks = rentalTransactionRepository.getRentedBooksByUserId(username);
        for(RentalTransactionPayload rentedBook : rentedBooks){
            rentedBook.setFine(CalculateFineUtils.matchingFineConfig(fineRateConfigs,rentedBook.getDueDate(),rentedBook.getBookPrice()));
        }
        return rentedBooks;
    }

    public void returnBook(ReturnBookRequestPayload requestPayload){
        List<RentalTransaction> returnTransactionList = new ArrayList<>();
        List<Book> updateBookStock = new ArrayList<>();
        for(RentalTransactionPayload returnBook : requestPayload.getReturnList()){
            returnTransactionList.add(
                    new RentalTransaction(
                            LocalDateTime.now(),
                            requestPayload.getUsername(),
                            UUID.fromString(returnBook.getTransactionId()),
                            returnBook.getRentTimestamp(),
                            returnBook.getDueDate(),
                            LocalDateTime.now(),
                            returnBook.getFine(),
                            RentalStatus.RETURNED
                    )
            );

            if(updateBookStock.stream().anyMatch(b -> b.getId().equals(UUID.fromString(returnBook.getBookId())))){
                Book book = updateBookStock.stream().filter(b -> b.getId().equals(UUID.fromString(returnBook.getBookId()))).findFirst().orElseThrow();
                book.setNumberInStock(book.getNumberInStock() + 1);
            }else {
                Book book = new Book();
                book.setId(UUID.fromString(returnBook.getBookId()));
                book.setNumberInStock(1);
                updateBookStock.add(book);
            }
        }


        rentalTransactionRepository.batchUpdateReturnTrn(returnTransactionList);
        bookRepository.updateBookNumberInStock(updateBookStock);
    }
}
