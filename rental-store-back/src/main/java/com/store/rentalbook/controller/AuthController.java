package com.store.rentalbook.controller;

import com.store.rentalbook.enums.MenuEnum;
import com.store.rentalbook.payload.MenuPayload;
import com.store.rentalbook.payload.ResponsePayload;
import com.store.rentalbook.payload.auth.LoginRequestPayload;
import com.store.rentalbook.payload.auth.LoginResponsePayload;
import com.store.rentalbook.payload.rent.RentalTransactionPayload;
import com.store.rentalbook.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "${front.domain}")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ResponsePayload<String>> registerUser(@RequestBody LoginRequestPayload requestPayload){
        authService.registerUser(requestPayload,"USER");
        return ResponseEntity.ok(new ResponsePayload<>("Success","User registered successfully"));
    }

    @PostMapping("/register-admin")
    public ResponseEntity<ResponsePayload<String>> registerAdmin(@RequestBody LoginRequestPayload requestPayload){
        try {
            authService.registerUser(requestPayload, "ADMIN");
            return ResponseEntity.ok(new ResponsePayload<>("Success", "Admin registered successfully"));
        }catch (DataIntegrityViolationException e){
            return ResponseEntity.badRequest().body(new ResponsePayload<>("Failed", "Username already exists"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ResponsePayload<LoginResponsePayload>> login(@RequestBody LoginRequestPayload requestPayload){
        return ResponseEntity.ok(new ResponsePayload<>("Success", authService.login(requestPayload)));
    }



    @GetMapping("/menu")
    public ResponseEntity<ResponsePayload<List<MenuPayload>>> getMenu(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails user) {
            String role = authService.checkRole(user.getUsername());
            List<MenuPayload> menuList = Arrays.stream(MenuEnum.values())
                    .filter(menu -> menu.getAccessRoles().stream().anyMatch(r -> r.equals(role)))
                    .map(menu -> new MenuPayload(menu.getMenuCode(), menu.getMenuName()))
                    .toList();
            return ResponseEntity.ok(new ResponsePayload<>("Success", menuList));
        } else {
            return ResponseEntity.status(401).body(new ResponsePayload<>("Unauthorized", null));
        }
    }

}
