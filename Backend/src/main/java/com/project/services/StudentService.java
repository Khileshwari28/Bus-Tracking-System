package com.project.services;

import com.project.entity.Student;
import com.project.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public void changePassword(Long id, String newPassword) {
        Student student = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        student.setPassword(newPassword);
        repository.save(student);
    }

    public boolean login(String enrollmentNumber, String password) {
        return repository
                .findByEnrollmentNumberAndPasswordAndEnabledTrue(
                        enrollmentNumber,
                        password
                )
                .isPresent();
    }
}
