package com.example.CRUD_SpringBoot.EmployeeManagement.repository;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByEmailAndPassword(String email, String password);
}
