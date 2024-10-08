package com.example.CRUD_SpringBoot.EmployeeManagement.service;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Manager;

import java.util.List;

public interface ManagerService {
    public Manager getManagerByEmailAndPassword(String email, String password);
    public List<Manager> getAllManagers();
    public List<Manager> search(String query);
    public Manager insert(Manager manager);
}
