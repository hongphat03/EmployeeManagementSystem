package com.example.CRUD_SpringBoot.EmployeeManagement.service;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    Employee getEmployeeByEmailAndPass(String email, String password);
    List<Employee> getAllEmployees();
    Employee getEmployeeById(long id);
    Employee updateEmployee(long id, Employee newEmployee);
    void deleteEmployee(long id);
}
