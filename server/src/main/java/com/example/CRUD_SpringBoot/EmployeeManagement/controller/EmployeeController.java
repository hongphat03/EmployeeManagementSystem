package com.example.CRUD_SpringBoot.EmployeeManagement.controller;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Employee;
import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import com.example.CRUD_SpringBoot.EmployeeManagement.service.EmployeeService;
import com.example.CRUD_SpringBoot.EmployeeManagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping()
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee){
        // use ResponseEntity to send detail response such as status code, header
        return new ResponseEntity<Employee>(employeeService.saveEmployee(employee), HttpStatus.OK);
    }
    @GetMapping()
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long employeeId){
        return new ResponseEntity<>(employeeService.getEmployeeById(employeeId),HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employee){
        return new ResponseEntity<>(employeeService.updateEmployee(id,employee),HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable long id){
        employeeService.deleteEmployee(id);
    }

}
