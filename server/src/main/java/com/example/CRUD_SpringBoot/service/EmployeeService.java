package com.example.CRUD_SpringBoot.service;

import com.example.CRUD_SpringBoot.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    List<Employee> getAllEmployees();
    Employee getEmployeeById(long id);
    Employee updateEmployee(long id, Employee newEmployee);
    void deleteEmployee(long id);
}
