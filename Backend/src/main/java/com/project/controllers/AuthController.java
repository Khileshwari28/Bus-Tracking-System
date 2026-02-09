package com.project.controllers;

import com.project.services.StudentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final StudentService service;

    public AuthController(StudentService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public String login(@RequestParam String enrollmentNumber,
                        @RequestParam String password) {

        return service.login(enrollmentNumber, password)
                ? "Login Successful"
                : "Invalid Enrollment Number or Password";
    }
}
