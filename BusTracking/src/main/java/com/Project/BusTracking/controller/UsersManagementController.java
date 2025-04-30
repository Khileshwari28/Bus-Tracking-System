package com.Project.BusTracking.controller;

import com.Project.BusTracking.dto.ReqRes;
import com.Project.BusTracking.entity.Users;
import com.Project.BusTracking.repository.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UsersManagementController {

    @Autowired
    private UsersRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody ReqRes credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        Optional<Users> user = userRepository.findByUsernameAndPassword(username, password);
        if (user.isPresent()) {
            return ResponseEntity.ok(Map.of("message", "Login Successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
        }
    }
}