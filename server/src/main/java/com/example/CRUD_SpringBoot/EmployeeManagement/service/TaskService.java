package com.example.CRUD_SpringBoot.EmployeeManagement.service;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;

import java.util.List;

public interface TaskService {
    Task saveTask(Task task);
    List<Task> getListTask();
    List<Task> getTaskId(long id);
}
