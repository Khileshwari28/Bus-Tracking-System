package com.project.controllers;

import com.project.services.AdminService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminAuthController {

    private final AdminService adminService;

    public AdminAuthController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public String login(@RequestParam String adminId,
                        @RequestParam String password) {

        return adminService.login(adminId, password)
                ? "Admin Login Successful"
                : "Invalid Admin ID or Password";
    }
}
