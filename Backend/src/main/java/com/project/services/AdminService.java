package com.project.services;

import com.project.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public boolean login(String adminId, String password) {
        return adminRepository
                .findByAdminIdAndPassword(adminId, password)
                .isPresent();
    }
}
