package com.store.rentalbook.utils;

import com.store.rentalbook.entity.FineRateConfig;
import lombok.experimental.UtilityClass;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@UtilityClass
public class CalculateFineUtils {
    public static BigDecimal matchingFineConfig(List<FineRateConfig> fineRateConfigList, LocalDate dueDate,BigDecimal bookPrice){
        int overdueReturnDate = (int) ChronoUnit.DAYS.between(dueDate, LocalDate.now());
        if(overdueReturnDate > 0){
            BigDecimal fineRate = new BigDecimal("10");
            if(fineRateConfigList != null && !fineRateConfigList.isEmpty()){
                fineRate = fineRateConfigList.stream()
                        .filter(f -> f.getMinDayLate() <= overdueReturnDate && (f.getMaxDayLate() == null || f.getMaxDayLate() >= overdueReturnDate ))
                        .map(FineRateConfig::getFinePercent)
                        .max(BigDecimal::compareTo)
                        .orElse(BigDecimal.ZERO);
            }

            BigDecimal percent = fineRate.divide(new BigDecimal("100"),4, RoundingMode.HALF_UP);
            return bookPrice.multiply(percent);
        }else return BigDecimal.ZERO;
    }
}
