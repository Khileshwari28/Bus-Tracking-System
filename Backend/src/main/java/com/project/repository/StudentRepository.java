package com.project.repository;

import com.project.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEnrollmentNumber(String enrollmentNumber);

    Optional<Student> findByEnrollmentNumberAndPasswordAndEnabledTrue(
            String enrollmentNumber,
            String password
    );
}
