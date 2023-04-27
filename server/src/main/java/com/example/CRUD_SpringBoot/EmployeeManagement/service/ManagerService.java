package com.example.CRUD_SpringBoot.EmployeeManagement.service;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Manager;

public interface ManagerService {
    public Manager getManagerByEmailAndPassword(String email, String password);
}
