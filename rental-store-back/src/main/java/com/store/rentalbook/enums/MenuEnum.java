package com.store.rentalbook.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public enum MenuEnum {
    HOME("HOME", "หน้าหลัก", List.of("USER","ADMIN")),
    HISTORY("HISTORY", "ประวัติการเช่าและกำหนดส่งคืน", List.of("USER")),
    RENTAL("RENTAL", "ยืมหนังสือ", List.of("ADMIN")),
    RETURN("RETURN", "คืนหนังสือ", List.of("ADMIN")),
    ;
    private final String menuCode;
    private final String menuName;
    private final List<String> accessRoles;
}
