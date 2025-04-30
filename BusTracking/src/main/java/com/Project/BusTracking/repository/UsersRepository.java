package com.Project.BusTracking.repository;

import com.Project.BusTracking.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByUsernameAndPassword(String username, String password);

}
