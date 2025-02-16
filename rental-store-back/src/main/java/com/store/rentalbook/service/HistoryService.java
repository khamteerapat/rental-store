package com.store.rentalbook.service;

import com.store.rentalbook.entity.FineRateConfig;
import com.store.rentalbook.enums.RentalStatus;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import com.store.rentalbook.repository.finerateconfig.FineRateConfigRepository;
import com.store.rentalbook.repository.rentbook.RentalTransactionRepository;
import com.store.rentalbook.utils.CalculateFineUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.LinkedList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HistoryService {

    private final RentalTransactionRepository rentalTransactionRepository;
    private final FineRateConfigRepository fineRateConfigRepository;

    public List<RentalTransactionPayload> getHistoryRentedBooksByUserId(String username) {
        List<RentalTransactionPayload> historyList = rentalTransactionRepository.getHistoryRentedBooksByUserId(username);

        List<RentalTransactionPayload> rentedTransaction = historyList.stream().filter(trn -> trn.getStatus().equals(RentalStatus.RENTED.getValue())).toList();
        if(!CollectionUtils.isEmpty(rentedTransaction)){
            List<FineRateConfig> fineRateConfigs = fineRateConfigRepository.getFineRateConfig();
            for(RentalTransactionPayload rentedBook : rentedTransaction){
                rentedBook.setFine(CalculateFineUtils.matchingFineConfig(fineRateConfigs,rentedBook.getDueDate(),rentedBook.getBookPrice()));
            }
        }


        List<RentalTransactionPayload> responseHistoryList = new LinkedList<>();
        responseHistoryList.addAll(rentedTransaction);
        responseHistoryList.addAll(historyList.stream().filter(trn -> trn.getStatus().equals(RentalStatus.RETURNED.getValue())).toList());

        return responseHistoryList;
    }
}
