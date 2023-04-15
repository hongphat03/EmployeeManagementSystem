package com.example.CRUD_SpringBoot.repository;

import com.example.CRUD_SpringBoot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
