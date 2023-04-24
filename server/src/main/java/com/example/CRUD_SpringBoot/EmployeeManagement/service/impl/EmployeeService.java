package com.example.CRUD_SpringBoot.EmployeeManagement.service.impl;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Employee;
import com.example.CRUD_SpringBoot.EmployeeManagement.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EmployeeService implements com.example.CRUD_SpringBoot.EmployeeManagement.service.EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.get();
    }

    @Override
    public Employee updateEmployee(long id, Employee newEmployee) {
        Employee employee = employeeRepository.findById(id).get();
        employee.setEmail(newEmployee.getEmail());
        employee.setFirstName(newEmployee.getFirstName());
        employee.setLastName(newEmployee.getLastName());

        return employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(long id) {
        employeeRepository.deleteById(id);
    }

}
