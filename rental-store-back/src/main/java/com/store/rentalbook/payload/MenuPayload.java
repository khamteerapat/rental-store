package com.store.rentalbook.payload;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class MenuPayload {
    @JsonProperty("menu_code")
    private String menuCode;
    @JsonProperty("menu_name")
    private String menuName;
}
