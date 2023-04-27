package com.example.CRUD_SpringBoot.EmployeeManagement.repository;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Employee;
import com.example.CRUD_SpringBoot.EmployeeManagement.model.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager,Long> {
    Manager findByEmailAndPassword(String email, String password);
}
