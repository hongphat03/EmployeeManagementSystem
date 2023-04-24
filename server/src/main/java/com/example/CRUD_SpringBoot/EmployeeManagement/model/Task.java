package com.example.CRUD_SpringBoot.EmployeeManagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "task")
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "employee_id")
    private long employeeId;
    @Column(name = "manager_name")
    private String managerName;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "deadline")
    private String deadline;
}
