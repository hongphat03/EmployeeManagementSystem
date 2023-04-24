package com.example.CRUD_SpringBoot.EmployeeManagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "manager")
@Data
public class Manager {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
}
