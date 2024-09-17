package com.example.CRUD_SpringBoot.EmployeeManagement.repository;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByEmployeeId(long id);
    @Query("SELECT t FROM Task t WHERE t.name LIKE CONCAT('%',?1, '%')"
            + "OR t.description  LIKE CONCAT('%',?1, '%')"
            + "OR t.deadline  LIKE CONCAT('%',?1, '%')"
            + "OR t.employeeId  LIKE CONCAT('%',?1, '%')")
    List<Task> search(String keyword);
}
