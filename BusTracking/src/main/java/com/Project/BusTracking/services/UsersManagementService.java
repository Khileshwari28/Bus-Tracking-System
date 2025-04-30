package com.Project.BusTracking.services;

import com.Project.BusTracking.dto.ReqRes;
import com.Project.BusTracking.entity.Users;
import com.Project.BusTracking.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersManagementService {

    @Autowired
    private UsersRepository usersRepository;

    public String login(ReqRes loginRequest) {
        Users user = usersRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword()).orElse(null);
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }
}
