package com.example.CRUD_SpringBoot.EmployeeManagement.controller;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Manager;
import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import com.example.CRUD_SpringBoot.EmployeeManagement.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/manager")
public class ManagerController {
    @Autowired
    ManagerService managerService;
    @PostMapping("/loginAsManager")
    public ResponseEntity<Manager> getManagerByEmailAndPass(@RequestBody Manager manager){
        String email = manager.getEmail();
        String password = manager.getPassword();
        return new ResponseEntity<>(managerService.getManagerByEmailAndPassword(email,password), HttpStatus.OK);
    }

    @GetMapping("/search")
    public List<Manager> search(@RequestParam("query") String query){
        return managerService.search(query);
    }
}
