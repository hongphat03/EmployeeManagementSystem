package com.example.CRUD_SpringBoot.EmployeeManagement.service.impl;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Manager;
import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import com.example.CRUD_SpringBoot.EmployeeManagement.repository.ManagerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ManagerService implements com.example.CRUD_SpringBoot.EmployeeManagement.service.ManagerService {
    @Autowired
    ManagerRepository managerRepository;
    @Override
    public Manager getManagerByEmailAndPassword(String email, String password) {
        return managerRepository.findByEmailAndPassword(email,password);
    }

    @Override
    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    @Override
    public List<Manager> search(String query) {
        return managerRepository.search(query);
    }
}
