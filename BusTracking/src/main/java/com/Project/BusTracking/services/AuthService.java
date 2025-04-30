package com.Project.BusTracking.services;

import com.Project.BusTracking.entity.Users;
import com.Project.BusTracking.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UsersRepository userRepository;

    public boolean authenticate(String username, String password) {
        Optional<Users> user = userRepository.findByUsernameAndPassword(username, password);
        return user.isPresent() && user.get().getPassword().equals(password);
    }

}

