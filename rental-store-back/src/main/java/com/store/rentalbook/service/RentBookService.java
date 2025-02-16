package com.store.rentalbook.service;

import com.store.rentalbook.entity.Book;
import com.store.rentalbook.entity.RentalTransaction;
import com.store.rentalbook.entity.User;
import com.store.rentalbook.enums.RentalStatus;
import com.store.rentalbook.payload.book.BookPayload;
import com.store.rentalbook.repository.book.BookRepository;
import com.store.rentalbook.repository.rentbook.RentalTransactionRepository;
import com.store.rentalbook.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RentBookService {
    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final RentalTransactionRepository rentalTransactionRepository;

    public void rentBook(String username, List<BookPayload> books){
        UUID userId = userRepository.findIdByUsername(username);
        User user = new User(userId,username);

        List<Book> bookList = bookRepository.getBookByIdList(books.stream().map(BookPayload::getId).toList());


        List<RentalTransaction> rentalTransactions = new ArrayList<>();
        List<Book> updateBookStock = new ArrayList<>();
        for(BookPayload rentBook : books){
            Book book = bookList.stream().filter(b -> b.getId().equals(rentBook.getId())).findFirst().orElseThrow();
            book.setNumberInStock(book.getNumberInStock() - rentBook.getNumberInStock());
            updateBookStock.add(book);
            for(int i = 0; i < rentBook.getNumberInStock(); i++){
                rentalTransactions.add(
                        new RentalTransaction(
                                UUID.randomUUID(),
                                book,
                                user,
                                LocalDateTime.now(),
                                LocalDate.now().plusDays(7),
                                null,
                                null,
                                RentalStatus.RENTED
                        )
                );
            }
        }

        rentalTransactionRepository.batchSave(rentalTransactions);
        bookRepository.batchUpdate(updateBookStock);
    }
}
