package com.project.controllers;

import com.project.entity.Student;
import com.project.repository.StudentRepository;
import com.project.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminStudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository repo;

    @GetMapping("/students")
    public List<Student> getAll() {
        return repo.findAll();
    }

    @PostMapping("/students")
    public Student add(@RequestBody Student s) {
        s.setEnabled(true);
        return repo.save(s);
    }

    @PutMapping("/students/{id}/toggle")
    public void toggle(@PathVariable Long id) {
        Student s = repo.findById(id).orElseThrow();
        s.setEnabled(!s.isEnabled());
        repo.save(s);
    }

    @DeleteMapping("/students/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }

    @PutMapping("/students/{id}/password")
    public void changePassword(
            @PathVariable Long id,
            @RequestParam String password
    ) {
        studentService.changePassword(id, password);
    }

}
