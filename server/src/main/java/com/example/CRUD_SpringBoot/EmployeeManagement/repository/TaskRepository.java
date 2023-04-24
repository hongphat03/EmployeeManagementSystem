package com.example.CRUD_SpringBoot.EmployeeManagement.repository;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByEmployeeId(long id);
}
